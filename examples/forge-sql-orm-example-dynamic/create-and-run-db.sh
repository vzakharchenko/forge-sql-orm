#!/usr/bin/env bash
set -euo pipefail

# -------- configurable ----------
CONTAINER_NAME="forge-sql-orm-mysql"
IMAGE="mysql:latest"
HOST_PORT="3366"
MYSQL_ROOT_PASSWORD="admin"
MYSQL_DATABASE="dynamicforgesqlorm"
# if you want a persistent named volume; set to "" to use an anonymous one
VOLUME_NAME="forge_sql_orm_mysql_data"
# --------------------------------

echo "==> Stop & remove previous container (if exists)"
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}\$"; then
  docker rm -f -v "${CONTAINER_NAME}" >/dev/null || true
  echo "   removed ${CONTAINER_NAME} (+anonymous volumes)"
fi


docker run -d \
  --name "${CONTAINER_NAME}" \
  -e MYSQL_ROOT_PASSWORD="${MYSQL_ROOT_PASSWORD}" \
  -e MYSQL_DATABASE="${MYSQL_DATABASE}" \
  -p "${HOST_PORT}:3306" \
  --restart always \
  "${IMAGE}" >/dev/null

echo "==> Waiting for MySQL to be ready on port ${HOST_PORT} ..."
# health-check loop
for i in {1..60}; do
  if docker exec "${CONTAINER_NAME}" mysqladmin ping -proot -p"${MYSQL_ROOT_PASSWORD}" --silent >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

# extra sanity check
docker exec -e MYSQL_PWD="${MYSQL_ROOT_PASSWORD}" -i "${CONTAINER_NAME}" \
  mysql -uroot -e "SELECT VERSION();" >/dev/null

echo "==> Ensure database '${MYSQL_DATABASE}' exists"
docker exec -e MYSQL_PWD="${MYSQL_ROOT_PASSWORD}" -i "${CONTAINER_NAME}" \
  mysql -uroot -e "CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;"


# Double-check by a trivial query
docker exec -i "${CONTAINER_NAME}" \
  mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" -e "SELECT 1;" >/dev/null

echo "==> Creating table 'users' in database '${MYSQL_DATABASE}'"
docker exec -i "${CONTAINER_NAME}" \
  mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" "${MYSQL_DATABASE}" <<'SQL'
SET foreign_key_checks = 0;
create table users (id int not null auto_increment primary key, name varchar(200) null);
SET foreign_key_checks = 1
SQL

echo "==> Done. MySQL is running on 127.0.0.1:${HOST_PORT}, DB=${MYSQL_DATABASE}"
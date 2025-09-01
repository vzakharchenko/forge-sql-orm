#!/usr/bin/env bash
set -euo pipefail

# -------- configurable ----------
CONTAINER_NAME="forge-sql-orm-mysql"
IMAGE="mysql:latest"
HOST_PORT="3366"
MYSQL_ROOT_PASSWORD="admin"
MYSQL_DATABASE="forgesqlarticle"
# if you want a persistent named volume; set to "" to use an anonymous one
VOLUME_NAME="forge_sql_orm_mysql_data"
# --------------------------------

echo "==> Stop & remove previous container (if exists)"
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}\$"; then
  docker rm -f "${CONTAINER_NAME}" >/dev/null
  echo "   removed ${CONTAINER_NAME}"
fi

# optional: wipe volume if called with --wipe
if [[ "${1:-}" == "--wipe" ]] && [[ -n "${VOLUME_NAME}" ]]; then
  if docker volume ls --format '{{.Name}}' | grep -q "^${VOLUME_NAME}\$"; then
    echo "==> Removing volume ${VOLUME_NAME}"
    docker volume rm -f "${VOLUME_NAME}" >/dev/null
  fi
fi

echo "==> Start fresh MySQL container"
VOLUME_ARG=()
if [[ -n "${VOLUME_NAME}" ]]; then
  # create volume if not exists
  if ! docker volume ls --format '{{.Name}}' | grep -q "^${VOLUME_NAME}\$"; then
    docker volume create "${VOLUME_NAME}" >/dev/null
  fi
  VOLUME_ARG=(-v "${VOLUME_NAME}:/var/lib/mysql")
fi

docker run -d \
  --name "${CONTAINER_NAME}" \
  -e MYSQL_ROOT_PASSWORD="${MYSQL_ROOT_PASSWORD}" \
  -e MYSQL_DATABASE="${MYSQL_DATABASE}" \
  -p "${HOST_PORT}:3306" \
  --restart always \
  "${VOLUME_ARG[@]}" \
  "${IMAGE}" >/dev/null

echo "==> Waiting for MySQL to be ready on port ${HOST_PORT} ..."
# health-check loop
for i in {1..60}; do
  if docker exec "${CONTAINER_NAME}" mysqladmin ping -proot -p"${MYSQL_ROOT_PASSWORD}" --silent >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

# Double-check by a trivial query
docker exec -i "${CONTAINER_NAME}" \
  mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" -e "SELECT 1;" >/dev/null

# extra sanity check
docker exec -e MYSQL_PWD="${MYSQL_ROOT_PASSWORD}" -i "${CONTAINER_NAME}" \
  mysql -uroot -e "SELECT VERSION();" >/dev/null

echo "==> Ensure database '${MYSQL_DATABASE}' exists"
docker exec -e MYSQL_PWD="${MYSQL_ROOT_PASSWORD}" -i "${CONTAINER_NAME}" \
  mysql -uroot -e "CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;"

echo "==> Creating table 'users' in database '${MYSQL_DATABASE}'"
docker exec -i "${CONTAINER_NAME}" \
  mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" "${MYSQL_DATABASE}" <<'SQL'
SET foreign_key_checks = 0;
CREATE TABLE IF NOT EXISTS issue_check_list (
  issue_id varchar(255) NOT NULL,
  check_list json NOT NULL,
  updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_id varchar(255) NOT NULL,
  update_display_name varchar(255) NOT NULL,
  PRIMARY KEY (issue_id) /*T![clustered_index] CLUSTERED */
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
SET foreign_key_checks = 1
SQL

echo "==> Done. MySQL is running on 127.0.0.1:${HOST_PORT}, DB=${MYSQL_DATABASE}"
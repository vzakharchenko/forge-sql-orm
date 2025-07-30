#!/bin/bash
set -e

ncu -u --dep prod,dev,peer
npm i
npm run build
cd forge-sql-orm-cli
ncu -u --dep prod,dev,peer
npm i
npm run build
cd ../examples

cd forge-sql-orm-example-drizzle-driver-simple
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-dynamic
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-optimistic-locking
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-query-analyses
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-analize/*
cd ../../..

cd forge-sql-orm-example-simple
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-checklist
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-article/*
cd ../../..

cd forge-sql-orm-example-org-tracker
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-sql-executor
rm -rf node_modules
ncu -u --dep prod,dev,peer
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u --dep prod,dev,peer
rm -rf package-lock.json
npm i
npm run build
sleep 2
git add -f package-lock.json
git add -f build-static/*
cd ../../..
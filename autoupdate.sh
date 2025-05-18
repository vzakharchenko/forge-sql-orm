#!/bin/bash
set -e

ncu -u
npm i
npm run build
cd forge-sql-orm-cli
ncu -u
npm i
npm run build
cd ../examples

cd forge-sql-orm-example-drizzle-driver-simple
rm -rf node_modules
ncu -u
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-dynamic
rm -rf node_modules
ncu -u
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-optimistic-locking
rm -rf node_modules
ncu -u
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-query-analyses
rm -rf node_modules
ncu -u
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-analize/*
cd ../../..

cd forge-sql-orm-example-simple
rm -rf node_modules
ncu -u
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-checklist
rm -rf node_modules
ncu -u
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-article/*
cd ../../..

cd forge-sql-orm-example-org-tracker
rm -rf node_modules
ncu -u
npm i
cd static/forge-orm-example
rm -rf node_modules
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..
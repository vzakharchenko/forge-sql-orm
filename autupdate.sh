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
ncu -u
npm i
cd static/forge-orm-example
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-dynamic
ncu -u
npm i
cd static/forge-orm-example
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-optimistic-locking
ncu -u
npm i
cd static/forge-orm-example
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..

cd forge-sql-orm-example-query-analyses
ncu -u
npm i
cd static/forge-orm-example
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-analize/*
cd ../../..

cd forge-sql-orm-example-simple
ncu -u
npm i
cd static/forge-orm-example
ncu -u
rm -rf package-lock.json
npm i
npm run build
sleep 2s
git add -f package-lock.json
git add -f build-static/*
cd ../../..
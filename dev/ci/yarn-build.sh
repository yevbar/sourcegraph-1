#!/usr/bin/env bash

set -e

export npm_config_proxy=http://npm-proxy:8080
export npm_config_https_proxy=http://npm-proxy:8080
export npm_config_strict_ssl=false
export yarn_http_proxy=http://npm-proxy:8080
export yarn_https_proxy=http://npm-proxy:8080
export yarn_strict_ssl=false

yarn config list

echo 'ENTERPRISE='$ENTERPRISE
echo 'NODE_ENV='$NODE_ENV
echo "# Note: NODE_ENV only used for build command"

echo "--- yarn in root"
NODE_ENV= yarn --frozen-lockfile --network-timeout 60000

cd $1
echo "--- browserslist"
NODE_ENV= yarn -s run browserslist

echo "--- build"
yarn -s run build --color

if jq -e '.scripts.bundlesize' package.json > /dev/null; then
    echo "--- bundlesize"
    NODE_ENV= GITHUB_TOKEN= yarn -s run bundlesize
fi

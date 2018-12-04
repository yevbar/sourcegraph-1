#!/usr/bin/env bash

set -e

export npm_config_proxy=http://npm-proxy:8080
export npm_config_https_proxy=http://npm-proxy:8080
export npm_config_strict_ssl=false
export yarn_httpproxy=http://npm-proxy:8080
export yarn_httpsproxy=http://npm-proxy:8080
export yarn_strictssl=false

yarn config list

echo "--- yarn"
yarn --frozen-lockfile --network-timeout 60000

for cmd in "$@"
do
    echo "--- $cmd"
    yarn -s run $cmd
done

#!/bin/bash
MYFOLDER=$(pwd)

# Ethermint
mkdir -p proto
cd /tmp
git clone https://github.com/evmos/ethermint/
cd ethermint/

git checkout tags v0.21.0-rc2
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf ethermint

# Realio-Network
cd /tmp
git clone https://github.com/realiotech/realio-network/
cd realio-network/
git checkout tags v0.7.2
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf realio-network

#!/bin/bash
MYFOLDER=$(pwd)

# Ethermint
mkdir -p proto
cd /tmp
git clone https://github.com/tharsis/ethermint/
cd ethermint/
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf ethermint

# Realio-Network
cd /tmp
git clone https://github.com/realiotech/realio-network/
cd realio-network/
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf realio-network

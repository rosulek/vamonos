#!/bin/bash

HERE=`pwd`
cd ../vamonos/
grunt
cd $HERE

cp -r ../vamonos/api/* api
cp ../vamonos/lib/* lib
cp ../vamonos/deps/* deps
cp ../vamonos/demos/* demos

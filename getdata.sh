#!/bin/bash

source ./config.sh

echo $getDataUrl

echo "Récupération des données"
curl  -o client/data.js --fail $getDataUrl

echo "Donnée OK"

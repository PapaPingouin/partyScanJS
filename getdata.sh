#!/bin/bash

source ./config.sh

echo $apiKey

echo "Récupération des données"
#wget -q -O client/data.js http://www.danceornothing.com/ws/adh/getall?key=$apiKey
curl  -o client/data.js --fail http://www.danceornothing.com/ws/adh/getall?key=$apiKey

echo "Donnée OK"

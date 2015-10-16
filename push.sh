#!/bin/bash

source ./config.sh

echo "Synchronisation des données"

mv data/data.list data/data.list.work
echo "Fichier temporaire créé"

echo "Transfert des données"
wget -q -O - --post-file=data/data.list.work http://www.danceornothing.com/ws/adh/update?key=$apiKey

echo "Données OK"

ts=`date +%Y-%m-%d_%H_%M_%S`

mv data/data.list.work data/archives/data_$ts.old

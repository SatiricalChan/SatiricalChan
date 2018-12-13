#!/bin/bash

if [[ -s ~/hub1.log ]] ; then
timestamp() {
  date +"%F"
}

mv ~/satiricalchan.log ~/satiricalchan"_$(timestamp).log"

> ~/satiricalchan.log
fi ;









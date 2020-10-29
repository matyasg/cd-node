#!/bin/bash
cd /home/smartuscrm/CRM/cd-node
eval "$(ssh-agent -s)"
git pull

#!/bin/bash
cd /home/kavia/workspace/code-generation/coffee-shop-explorer-25434-25446/coffee_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


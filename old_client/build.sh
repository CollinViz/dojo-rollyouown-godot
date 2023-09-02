#!/bin/bash

rm ../basicHTML/public/assets/index.js
npm run build
#cd dist/assets
find dist/assets -name '*.js' \
-exec mv -f {} ../basicHTML/public/assets/index.js ';' 
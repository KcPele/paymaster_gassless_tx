#! /bin/sh

yarn json5 -I -f package.json -e 'this.scripts.fleek="yarn fleek"'

yarn json5 -I -f package.json -e 'this.scripts.fleek="fleek"'
yarn json5 -I -f package.json -e 'this.scripts["fleek:login"]="fleek login"'
yarn json5 -I -f package.json -e 'this.scripts["fleek:deploy"]="NEXT_PUBLIC_PROD=true next build && fleek sites deploy"'

mv next.config.mjs next.config.mjs
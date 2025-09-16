#!/bin/bash
# Force npm usage and prevent yarn
export NETLIFY_USE_YARN=false
export SKIP_YARN_COREPACK=true
export YARN_PRODUCTION=false

# Remove any yarn files that might interfere - this was the key issue!
rm -f yarn.lock .yarnrc.yml
echo "Removed yarn.lock to prevent Yarn usage"

# Use npm with legacy peer deps
npm install --legacy-peer-deps
npm run build
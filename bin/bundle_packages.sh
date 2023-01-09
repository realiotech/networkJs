pwd;

./bin/clean_packages.sh
npm run build:fresh;
cd packages/address-generator && pwd && npx webpack;
cd ../proto && pwd && npx webpack;
cd ../provider && pwd && npx webpack;
cd ../transactions && pwd && npx webpack;
cd ../realiojs && pwd && npx webpack;

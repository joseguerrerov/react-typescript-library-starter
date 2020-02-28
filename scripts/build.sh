echo "Transpiling"
tsc -p .
echo "Transpiling done"
echo "Creating bundles"
rollup -c scripts/Rollup/rollup.config.js
echo "Bundles done"
echo "Move files"
#cp -a build/. .
echo "Delete tmp folder"
#rm -rf build
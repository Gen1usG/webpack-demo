yarn build &&
git checkout gh-page &&
rm -rf --preserve-root ./dist && 
mv dist/* ./ && 
rm dist && 
git add . && 
git commit -m 'update' && 
git push &&
git checkout -

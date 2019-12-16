yarn build &&
git checkout gh-pages &&
rm -rf !(dist) && 
mv dist/* ./ && 
git add . && 
git commit -m 'update' && 
git push &&
git checkout -

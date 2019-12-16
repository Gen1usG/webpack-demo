yarn build &&
git branch gh-page &&
git checkout gh-page &&
rm -rf *.html *.js *.css *.png && 
mv dist/* ./ && 
rm dist && 
git add . && 
git commit -m 'update' && 
git push &&
git checkout -

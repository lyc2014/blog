set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git config user.name "lyc2014"
git config user.email "1006414710@qq.com"
git commit -m 'deploy'

git push -f git@github.com:lyc2014/blog.git master:gh-pages

cd -
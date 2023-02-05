#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'gwj12345.github.io' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:gwj12345/interview-learn.git``
else
  msg='来自github actions的自动部署'
  githubUrl=https://gwj12345:${GITHUB_TOKEN}@github.com/gwj12345/interview-learn.git
  git config --global user.name "gwj12345"
  git config --global user.email "2403668241@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git checkout -B main # 切换到main分支才能推送，不然会报错
git push -f $githubUrl main:gh-pages # 推送到github

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist

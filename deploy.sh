rm -rf dist &&
 yarn build &&
 cd dist &&
 git init &&
 git add . &&
 git commit -m "update" &&
 git branch -M main &&
 git remote add origin git@github.com:L-Qichen/ease-ui-website.git &&
 git push -f -u origin main &&
 cd -
 echo https://l-qichen.github.io/ease-ui-website/index.html 

#!/bin/bash
# Execute deploy.sh in the directory "easy-jekyll-basedir" .
# useful for hosting on GitHub Pages 
#
# git checkout gh-pages
git add -A
git commit -m "Update Blog using deploy.sh"
git push origin gh-pages

#!/bin/bash
# Execute deploy.sh in the directory "easy-jekyll-basedir" .
# useful for hosting on GitHub Pages 
#
# git checkout gh-pages
# modied by Chen 18 June 2020

# chen: it is important to "build" the site locally before pushing the =_site/= directory to gh-pages
bundle exec jekyll serve 

git add -A
git commit -m "Update Blog using deploy.sh"

# push the local =master= branch to the remote =master= branch
git push


# comment out ~git push origin gh-pages~
# chen: now, push the git subtree =_site/= directly to the remote =gh-pages=  18 June 2020
# basically, this push =_site= to the remote =gh-pages=
git subtree push --prefix _site origin gh-pages

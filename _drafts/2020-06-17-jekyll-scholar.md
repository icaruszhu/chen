---
layout: post
title:  jekyll-scholar plugin with "git subtree"
date:   2020-06-17 22:37:12 +0100
author: Chen Zhu
category: tech note 
tags: emacs jekyll gh-pages
---

[to be finished]
Jekyll-scholar is a wonderful jekyll plug-in for generating bibliographies from one's bibtex file. I have a master bib file automatically generated from Zotero.  

- comment out the code in deploy.sh and add this line 

```sh
git subtree push --prefix _site origin gh-pages
```
  + or you can do it from the command line

```echo "git subtree push --prefix _site origin gh-pages" >> deploy.sh```

---
layout: post
title:  Adopt easy-jekyll for emacs
date:   2020-05-30 23:03:07 +0100
author: Chen Zhu
---

I have now managed to integrate Jekyll blogging into my Emacs workflow. I am so glad to find the ``easy-jekyll`` package, which can be installed from Melpa. One can install it with the good old ```use-package```. The official package recommends to the following code for installation: 

~~~lisp 
(use-package easy-jekyll
:init
(setq easy-jekyll-basedir "~/my-awesome-site/")
(setq easy-jekyll-url "https://yourblogdomain")
(setq easy-jekyll-sshdomain "blogdomain")
(setq easy-jekyll-root "/home/blog/")
(setq easy-jekyll-previewtime "300")
:bind ("C-c C-e" . easy-jekyll))
~~~

Here is the link to the package on Github:
https://github.com/masasam/emacs-easy-jekyll (licensed under GPLv3)

Once installed, the eponymous ```easy-jekyll``` command is recommeded to be bound to ```C-c C-e``` (see above). However, I find this keybinding clashes with ```org-export-dispatch``` if you are working in an org file. So I choose to use a non-clashing keybinding, which can be easily done.

Following the instruction, I also write put ```delopy.sh``` bash script,  This allows me to automatically ```push``` (aka "upload") the upadated blog to my github pages by pressing ```G``` on my keyboard. 

Once everything is configured , ```easy-jekyll``` is truly EASY to use!

PS: I also learn that it is possible to write Jekyll blogs with Emacs's super powerful ```Org``` mode. There seem to be many ways of doing this. Elsa Gonsiorowski has done a fantastic survey on different ways of implementing an Org-led workflow. https://www.gonsie.com/blorg/survey-org-jekyll.html

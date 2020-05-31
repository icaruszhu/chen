---
layout: post
title:  Adopt easy-jekyll for emacs
date:   2020-05-30 23:03:07 +0100
author: Chen Zhu
---

I have now managed to integrate Jekyll blogging into my Emacs workflow. I am so glad to find the ``easy-jekyll`` package, which can be installed from Melpa. One can install it with the good old ```use-package```

Here is the link to the package on Github:
https://github.com/masasam/emacs-easy-jekyll (licensed under GPLv3)

Once installed, the eponymous ```easy-jekyll``` command is recommeded to be bound to ```C-c C-e```. However, I find this clashes with ```org-export-dispatch``` if you are working in an org file.  

Following the instruction, I also write put ```delopy.sh``` bash script,  This allows me to automatically ```push``` (aka "upload") the upadated blog to my github pages by pressing ```G``` on my keyboard. 

Once everything is configured , ```easy-jekyll``` is truly EASY to use!

PS: I also learn that it is possible to  write Jekyll blogs with Emacs's super powerfull ```Org``` mode. There seems to be many ways of doing this. Elsa Gonsiorowski has done a fantastic survey about different ways of using an Org-led workflow. https://www.gonsie.com/blorg/survey-org-jekyll.html

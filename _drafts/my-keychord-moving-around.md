---
layout: post
title:  Emacs and keychord binding (1): Moving around org-subtrees
date:   2020-06-20 20:25:17 +0100
category: "well-programmed clavier"
author: Chen Zhu
---

## moving around org-subtrees

Emacs has [xxx] default keybindings. It is impossible to remember all of them and nor is it  necessary to do so.  

I find it keychord     (I discover keychord.el thanks to ```Prelude``` Emacs configuration. 


I find rarely use ```org-refile``` and ```org-copy```, partly because I have too many org files (over 120 of them in my ```deft``` folder) and even more sub-trees in those files. It is hard to remember where to I am going to refile something to another sub-heading in another file.

Do not conflate ```org-copy``` and ```org-copy-subtree```. The former is specially for refiling and the latter does what is said on the tin. 
~~~lisp
;; * define ~vv~ for refiling and moving around headings [2020-02-28 Fri]
(let
    ((sub-keymap (make-sparse-keymap)))
  ;; org-refile group
  (define-key sub-keymap "a" 'avy-org-refile-as-child)
  ;; retired this keybinding [2020-06-02 Tue]
  ;; (define-key sub-keymap "c" 'org-copy)

  (define-key sub-keymap "r" 'org-refile)
  (define-key sub-keymap "g" 'org-refile-goto-last-stored)

  ;; mark,copy and cut subtrees
  (define-key sub-keymap "m" 'org-mark-subtree)
  ;; note that I no longer use org-copy but ~vv c~ is ~org-copy-subtree~ from now on [2020-06-02 Tue]
  (define-key sub-keymap "c" 'org-copy-subtree)
  (define-key sub-keymap "k" 'org-cut-subtree)
  

  (key-chord-define-global "vv" sub-keymap))
~~~

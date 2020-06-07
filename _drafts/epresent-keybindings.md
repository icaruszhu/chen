---
layout: post
title:  epresent-keybindings
date:   2020-06-04 10:56:58 +0100
---

epresent for presentation 

keybindings 

|        |                       |   |   |
|:-------|:----------------------|:--|:--|
| F5     | epresent-edit-text    |   |   |
| 1 or t | top page/content page |   |   |
|        |                       |   |   |
|        |                       |   |   |
|        |                       |   |   |

~~~lisp

(defvar epresent-mode-map
  (let ((map (make-keymap)))
    (suppress-keymap map)
    ;; line movement
    (define-key map "j" 'scroll-up)
    (define-key map [down] 'scroll-up)
    (define-key map "k" 'scroll-down)
    (define-key map [up] 'scroll-down)
    ;; page movement
    (define-key map " " 'epresent-next-page)
    (define-key map "n" 'epresent-next-page)
    (define-key map "f" 'epresent-next-page)
    (define-key map [right] 'epresent-next-page)
    (define-key map [next] 'epresent-next-page)
    (define-key map "p" 'epresent-previous-page)
    (define-key map "b" 'epresent-previous-page)
    (define-key map [left] 'epresent-previous-page)
    (define-key map [prior] 'epresent-previous-page)
    (define-key map [backspace] 'epresent-previous-page)
    (define-key map "v" 'epresent-jump-to-page)
    ;; within page functions
    (define-key map "c" 'epresent-next-src-block)
    (define-key map "C" 'epresent-previous-src-block)
    (define-key map "e" 'org-edit-src-code)
    (define-key map [f5] 'epresent-edit-text) ; Another [f5] exits edit mode.
    (define-key map "x" 'org-babel-execute-src-block)
    (define-key map "r" 'epresent-refresh)
    (define-key map "g" 'epresent-refresh)
    ;; global controls
    (define-key map "q" 'epresent-quit)
    (define-key map "1" 'epresent-top)
    (define-key map "s" 'epresent-toggle-hide-src-blocks)
    (define-key map "S" 'epresent-toggle-hide-src-block)
    (define-key map "t" 'epresent-top)
    (define-key map "a" 'epresent-increase-inner-border)
    (define-key map ";" 'epresent-decrease-inner-border)

~~~

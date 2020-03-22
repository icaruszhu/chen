---
layout: page
title: Org-mode
permalink: "/org-mode/"
---

# Chen Zhu: The Org-mode for the Disorganised (May 2019)

- Chen's Talk at The Hacker Within (THW) presentation at UOB

``` org
#+TITLE: The Org-mode for the Disorganised
#+AUTHOR: Chen Wei Zhu (Birmingham Law School)
#+EMAIL: c.w.zhu [at] bham.ac.uk
#+DATE: 13:00pm, 20 May 2019 (UG05 Murray Learning Centre)
#+LICENCE: Creative Commons--Attribution 4.0 International
```

# Emacs installation

  - cross-platform: Linux/Mac/ Windows
  - Linux distros (e.g. Manajaro, MX Linux, Ubuntu etc.)
  - \[e.g.\] install emacs26 on Ubuntu from ppa:kellyk/emacs

<!-- end list -->

``` shell
sudo add-apt-repository ppa:kelleyk/emacs -y
sudo apt-get update
sudo apt install emacs26
```

# Part I Introducing Org-mode

# What is Org-mode? 

  - "Org mode is for keeping notes, maintaining TODO lists, planning
    projects, and authoring documents with a fast and effective
    plain-text system."
  - initiated by Carsten Dominik in 2003
  - maintained by Bastien Guerry and developed by many others
  - see <https://orgmode.org/>

# Why Org-mode? (some reasons…)

  - note-taking + task management + publishing
  - plain text + markup language
  - cross-platform
  - synchronisation among devices

# Org-mode vs Evernote/Onenote

  - open format vs proprietary format
  - importance of "grep-ability" (for regular expression search)
  - note-taking and drafting for writing projects

# Org-mode vs Markdown

  - bullet point: \* versus \#
  - task management (esp. agenda view)
  - evaluating code blocks
  - citation /bibliographical management (e.g. integration with Zotero)

# Live Demonstration 

# Org-mode Basics

  - Bullet points (a bit like markdown): using **asterisks**
  - folding & unfolding: TAB
  - moving trees/subtrees/paragraphs: Alt + arrow keys (up & down)
  - assign task priority: Shift + arrows keys (up & down)

# Scheduling tasks 

  - key chord: Ctrl-x C-s
  - select a calendar date: Shift + arrow keys
  - enter a time: e.g. 1pm
  - change date/time: Shift + arrow keys (NB: the time duration will
    remain the same)

# Set deadlines 

  - key chord: C-x C-d
  - select a calendar date
  - finish a task in three weeks' time \[enter: "+3w"\]

# Scheduling tasks (examples)

- TODO give a talk on org-mode at THW

- IN-PROGRESS give a talk at THW

- TODO mark/feedback on student essays

- DONE read Walter Benjamin's Book *Illumination*

# Customising the TODO sequence

    #+SEQ_TODO: TODO(t) IN-PROGRESS(p) WAITING(w) |  DONE(d)

# Agenda view 

  - Alt-x: org-agenda-file-to-front /or/using the key chord: Ctrl-c \[
  - Alt-x:org-agenda /or/using the key chord: Ctrl-c a (e.g. in
    Spacemacs)
  - in the agenda view

| f | forward |
| b | back    |
| q | quit    |

# Org-mode Table 

| -------- | -------- | ------- |
| column1  | column2  | column3 |
| stallman | torvalds | gosling |
| gnu      | linux    | java    |

  - swap columns/rows: Alt + arrow keys

# Evaluate code block (org-babel) 

  - literate programming
  - \<s TAB

# Python 

``` python

word = "The Hacker Within Meeting today 20 May 2019"
for char in word:
    print (char)

```

# Shell command

``` bash
echo today is `date`
```

``` bash
echo "## level 2" | pandoc 
```

# Emacs lisp 

``` elisp
(car '(1,2,3,4))
```

# Org-mode easy templates

| - | ----------------------------------------------------- |
| s | \#+BEGIN<sub>SRC</sub> … \#+END<sub>SRC</sub>         |
| q | \#+BEGIN<sub>QUOTE</sub> … \#+END<sub>QUOTE</sub>     |
| c | \#+BEGIN<sub>CENTER</sub> … \#+END<sub>CENTER</sub>   |
| C | \#+BEGIN<sub>COMMENT</sub> … \#+END<sub>COMMENT</sub> |


# Part II Spacemacs + Org-mode 

# Emacs configuration files

1.  \~/.emacs
2.  \~/.emacs.el
3.  \~/.emacs.d/init.el

# Spacemacs installation

  - download spacemacs into \~/.emacs.d/

`$ git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d`

  - `~/emacs.d/`
  - `~/.spacemacs`

# Spacemacs configuration

|           |                      |
| --------- | -------------------- |
| M-m f e d | \~/.spacemacs        |
| M-m f e R | reload spacemacs     |
| M-m f e D | .spacemacs diff mode |

  - NB: M-m (emacs keybinding) = SPC (evil mode)
  - Set the scratch buffer (from the text-mode) to lisp-interaction-mode
    or any mode you like

# Useful spacemacs layers

  - org
  - bibtex
  - markdown
  - deft (a mode emulating notational velocity )
  - zotero (private layer)

# Org layer keybinding (random examples) 

  - Pomodoro clock: SPC m p
  - Org-present: SPC SPC org-present (or Alt+m org-prensent)

| Key Binding | Description    |
| ----------- | -------------- |
| h           | previous slide |
| l           | next slide     |
| q           | quit           |

# spacemacs zotero layer (a private layer) 

  - install zotxt in zotero & eamcs:
    <https://github.com/egh/zotxt/releases> <https://melpa.org/#/zotxt>
    ("Tools to integrate emacs with Zotero via the zotxt plugin")
  - create a private layer: "Alt-x configuration-layer/create-layer"
  - download the below two files from this link:
    <https://github.com/psamim/dotfiles/tree/master/spacemacs/private/psamim-org-zotero>
    download `packages.el` and `README.org` into
    \~/.emacs.d/private/psamim-org-zotero
  - add the `psamim-org-zotero` layer to \~/.spacema
    cs

# summary: some useful spacemacs key chords

  - Undo: C-/
  - Undo Tree: C-x u ("q" for quit)
  - Exporting to PDF: C-c C-e (l) (p)
  - Org-zotex-mode: Alt-m m z i (zotero insert)
  - Deft: Alt-m a n
  - Pandoc: Alt-m P /

# PDF slides -  download link

[Chen's org-mode talk PDF slides](https://github.com/icaruszhu/learning/blob/master/chen-thw-talk-orgmode-slides/Orgmode-THW-May2019.pdf)
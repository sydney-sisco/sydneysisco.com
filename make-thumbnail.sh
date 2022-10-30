#!/bin/zsh
convert src/images/gallery/$1 -auto-orient -thumbnail 373x -unsharp 0x.5 src/images/gallery/thumbnails/$1

# sydneysisco.com
Live at [sydneysisco.com](https://www.sydneysisco.com/)


### Adding a new image
Currently, images are displayed alphabetically based on their filename. So make sure the latest image is last A-Z. Original and thumbnail should have the name filename.

1. Add image to `src/images/gallery`
2. Create thumbnail using `convert IMG_4364.jpg -auto-orient -thumbnail 373x -unsharp 0x.5 thumbnail.jpg` and add to `src/images/gallery/thumbnails` using the original filename.
3. Update `src/image-data.json`.

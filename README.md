# sydneysisco.com
Live at [sydneysisco.com](https://www.sydneysisco.com/). Hosted on [Digital Ocean](https://m.do.co/c/a93305a85732)'s awesome App platform FOR FREE.


## Development
run the app: `npm start`
Node: `v16.19.0`

### Adding a new image
Currently, images are displayed alphabetically based on their filename. So make sure the latest image is last A-Z. Original and thumbnail should have the name filename.

1. Add image to `src/images/gallery`
2. Create thumbnail using `convert IMG_4364.jpg -auto-orient -thumbnail 373x -unsharp 0x.5 thumbnail.jpg` and add to `src/images/gallery/thumbnails` using the original filename.
3. Update `src/image-data.json`.

## Troubleshootings:
Images not showing up? Make sure the file extensions are in lower case.

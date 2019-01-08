Starter code for a basic HTML JS CSS site, with npm (for gulp):to transpile and minify javascript and SASS.

`Git Clone`

`~ npm i`

`~ gulp`

The root index.html file is set up to work with the public JS and CSS, the default gulp task will watch the src JS and SASS, there is no live-reloading.


Adding a node script that will make (40x40px) thumbnails from all the images in `./assets/gallery/fullsize/*.jpg`
and save them into `./assets/gallery/thumbnail/*.jpg`

run `node thumbnail.js` from terminal to generate.

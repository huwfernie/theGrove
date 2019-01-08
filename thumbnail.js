console.log('Starting thumbnails');

const thumbnail_height = 40;
const thumbnail_width = 40;

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const testing = false;
let count = 0;

const fullsizeFolder = './assets/gallery/fullsize/';
const thumbnailFolder = './assets/gallery/thumbnail/';

fs.readdirSync(fullsizeFolder).forEach(file => {
  testing ? console.log(file) : null;
  sharp(path.join(fullsizeFolder, file))
    .resize(thumbnail_width, thumbnail_height)
    .toFile((path.join(thumbnailFolder, file)), (err, info) => {
      if (err) {
        testing ? console.log(err) : null;
      } else {
        testing ? console.log(info) : null;
      }
    });
  count++;
});

console.log(`Ending thumbnails, made ${count} images`);

// cleanContents(thumbnailFolder);
// function cleanContents(filepath) {
//   //Warning - this will delete contents and bypass any recycle-bin / trash, files are gone when you do this.
//   fs.readdir(filepath, (err, files) => {
//     if (err) throw err;
//
//     for (const file of files) {
//       fs.unlink(path.join(filepath, file), err => {
//         if (err) throw err;
//       });
//     }
//   });
// }

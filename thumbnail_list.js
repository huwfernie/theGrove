/*
This is a node function to create the correct number of <figure>'s for each image/thumbnail';
  read file ./src/index.html
  read all JPEG files in ./assets/gallery/thumbnail/ folder
  For each image create an <figure data-order_id="" style="background-image: url()"></figure>
  save new html file to ./index.html
*/

console.log('Starting thumnail_list');


const fs = require('fs');
const testing = true;
const indexSrc = './src/index.html';
const indexDest = './index.html';
const fullsizeFolder = './assets/gallery/fullsize/';
let files = [];

// Read all images and build list of filenames (restricted to .jpg)
fs.readdirSync(fullsizeFolder).forEach(file => {
  testing ? console.log(file) : null;
  if (file.includes('.jpg')) {
    file = file.replace(/\.[^/.]+$/, '');
    files.push(file);
  }
});

files = files.sort((a, b) => a - b);

if(testing) {
  files.forEach((file) => {
    console.log('now',file);
  });
}

// read source index.html file and split around '{{% figure}}'
let source = fs.readFileSync(indexSrc,'utf8');
let start = source.split('{{% figure}}')[0];
start = start.trim();
const end = source.split('{{% figure}}')[1];

files.forEach((file) => {
  start = start + `\n            <figure data-order_id="${file}" style="background-image: url(./assets/gallery/thumbnail/${file}.jpg)"></figure>`;
});

source = start + end;

// Save new html file
fs.writeFile(indexDest, source, function (err) {
  if (err) throw err;
  console.log('Saved new index file');
});


console.log('Ending thumbnail_list');

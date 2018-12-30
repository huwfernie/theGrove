console.log('The Grove');


const thumbnails = document.querySelectorAll('.gallery-thumbnails figure');
const galleryHero = document.querySelector('.gallery-hero figure');
const nextButtons = document.querySelectorAll('.next-button');
const prevButtons = document.querySelectorAll('.prev-button');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', clickedThumbnail);
});

nextButtons.forEach((button) => {
  button.addEventListener('click', clickedNext);
});

prevButtons.forEach((button) => {
  button.addEventListener('click', clickedPrevious);
});

function updateHero(newId) {
  const string = `./assets/gallery/fullsize/${newId}.jpg`;

  if(string) {
    galleryHero.style.backgroundImage = `url(${string})`;
    galleryHero.dataset.order_id = newId;
  }
}

function clickedThumbnail() {
  const newId = this.dataset.order_id;
  updateHero(newId);
}

function clickedNext() {
  const current = galleryHero.dataset.order_id;
  const total = thumbnails.length;
  let next = parseInt(current) + 1;
  next = (next > total)? 1 : next;
  updateHero(next);
}

function clickedPrevious() {
  const current = galleryHero.dataset.order_id;
  const total = thumbnails.length;
  let next = parseInt(current) - 1;
  next = (next < 1)? total : next;
  updateHero(next);
}

const thumbnails = document.querySelectorAll('.gallery-thumbnails figure');
const galleryHero = document.querySelector('.gallery-hero img');
const gallerySpinner = document.querySelector('.gallery-hero .loading');
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
  const oldId = galleryHero.dataset.order_id;

  if(string) {
    //show spinner
    //PreLoad image
    //hide spinner
    showSpinner();
    galleryHero.dataset.order_id = newId;
    PreLoadImage(string, (()=>{
      galleryHero.src = string;
      hideSpinner();
    }),(()=>{
      //on Error skip over to next or previous image
        window.console.clear();
        if (newId >= oldId) {
          clickedNext();
        } else {
          clickedPrevious();
        }
      })
    );
  }
}

function showSpinner() {
  gallerySpinner.style.zIndex = '3';
}

function hideSpinner() {
  gallerySpinner.style.zIndex = '1';
}

//Click Handlers
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

// Image PreLoading
function PreLoadImage( srcURL, callback, errorCallback ) {
  var thePic = new Image();
  thePic.onload = function() {
    callback();
    thePic.onload = function(){};
  };
  thePic.onerror = function() {
    errorCallback();
  };
  thePic.src = srcURL;
}

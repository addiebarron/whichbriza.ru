// webpack
import './sass/style.scss';

window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let resultsElem, btnElem, imgElem, textElem;

// image hrefs
let images = [
  {
    src: 'briza1',
    name: 'Musing Briza',
    alt: 'Briza looking upwards.',
    text: `u turn ur gaze the stars and comtemplate the bigger questions... r there cubbies on other planets? does someone out there have more hair than me? u do not know, and u are ok with that.`,
  },
  {
    src: 'briza2',
    name: 'Sus Briza',
    alt: 'alt text 2',
    text: `here's the thing. u got schemes. u got plans, machinations, big stinky skeletons in the closet. u are sus.`,
  },
  {
    src: 'briza3',
    name: 'Gay and Beautiful Briza',
    alt: 'alt text 3',
    text: `u are gay and beautiful briza :)`,
  },
  {
    src: 'briza4',
    name: 'BABY',
    alt: 'alt text4',
    text: 'U ARE BABY. U. BABY. U R. BABY!!!!',
  },
  {
    src: 'briza5',
    name: 'Nutso Briza',
    alt: 'alt text5',
    text: `u are off the WALL my dude! completely zoinked my guy! sniffing left and right like some kind of demon. absolutely incredible. never stop.`,
  },
  {
    src: 'briza6',
    name: 'Flat Briza',
    alt: 'alt text6',
    text: `the weight of the world is too much. here u shall stay... squished into this couch cushion... overwhelmed by ur great burdens of responsibility. ur gonna be ok, babe.`,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  resultsElem = $('#results-container');
  btnElem = $('#btn-container button');
  imgElem = $('#img-container img');
  textElem = $('#results-text');

  preloadImages(images.map(image => `img/${image.src}.jpg`));

  btnElem.onclick = whichBriza;
});

const whichBriza = async e => {
  $('#btn-container').classList.add('hidden');
  $('#results-container').classList.remove('hidden');

  const decision = await randomSrc();

  renderResults(decision);
};

const randomSrc = async () => {
  let currentImage,
    delay = 10,
    index = Math.floor(Math.random() * Math.floor(100));

  while (delay <= 500) {
    index++;
    delay *= 1.1;

    currentImage = images[index % images.length];

    imgElem.src = `img/${currentImage.src}.jpg`;
    imgElem.alt = currentImage.alt;

    await wait(delay);
  }

  return currentImage;
};

const renderResults = image => {
  resultsElem.classList.add('finished');
  textElem.innerHTML = `<h1>${image.name}</h1><p>${image.text}</p>`;
};

function preloadImages(array) {
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.onload = function () {
      var index = list.indexOf(this);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
      }
    };
    list.push(img);
    img.src = array[i];
  }
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

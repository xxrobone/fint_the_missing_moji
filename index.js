// getting the position of the mouse on move
// flashlight effect is in css
const postition = document.documentElement;
/* postition.addEventListener('mousemove', (e) => {
  postition.style.setProperty('--x', e.clientX + 'px');
  postition.style.setProperty('--y', e.clientY + 'px');
}); */
postition.addEventListener('pointermove', (e) => {
  postition.style.setProperty('--x', e.clientX + 'px');
  postition.style.setProperty('--y', e.clientY + 'px');
});

// creating array of the emojis in the html document
let emojis = [...document.querySelectorAll('.emoji')];
let missingEmoji = document.querySelector('.missing_moji');

let moji;

console.log(emojis);

function phoneTouch(e) {
  e.preventDefault();
  if (e.target.className === moji.className) {
    console.log('you found the moji');
    e.target.classList.add('spin', 'found');
    e.target.style.filter = 'drop-shadow(0px 3px 2px white)';
  } else {
    console.log('not The right one');
    e.target.style.display = 'none';
    e.target.classList.add('tranform_scale_down');
  }
  return false;
}

emojis.forEach((e) => {
  e.addEventListener('click', (e) => {
    console.log(e.target.className);

    if (e.target.className === moji.className) {
      console.log('you found the moji');
      e.target.classList.add('spin');
      e.target.style.transform = 'scale(3)';
      e.target.style.filter = 'drop-shadow(0px 3px 2px white)';
    } else {
      console.log('not The right one');
      e.target.style.display = 'none';
    }
  });

  e.addEventListener('mouseenter', (e) => {
    if (e.target.className === moji.className) {
      console.log('its the one now click damnit');
      e.target.classList.add('spin');
    } else {
      e.target.classList.add('tranform_scale_up');
      console.log('this emoji is :' + e.target.className);
    }
  });

  e.addEventListener('mouseleave', (e) => {
    if (e.target.className === moji.className) {
      console.log('yeah boi');
      e.target.classList.remove('spin');
    } else {
      e.target.classList.remove('tranform_scale_up');
      e.target.classList.add('tranform_scale_down');
      console.log('this emoji is :' + e.target.className);
    }
  });

  e.addEventListener('touchend', phoneTouch, false);
});

function randomMoji(inputArr) {
  // check that array actully is an array
  if (
    Array.isArray(inputArr) &&
    inputArr !== null &&
    inputArr !== undefined &&
    inputArr.length !== 0
  ) {
    moji = inputArr[Math.floor(Math.random() * inputArr.length)];
  } else {
    console.log('No array is found, need one to function');
  }
  return moji;
}

moji = randomMoji(emojis);

let clone = moji.cloneNode(true);
clone.classList.add('clone_moji');

missingEmoji.append(clone);

console.log(missingEmoji);

console.log('this is the clone :' + clone.className);
console.log('this is the moji :' + moji.className);

// getting the position of the mouse on move
// flashlight effect is in css
const postition = document.documentElement;
postition.addEventListener('mousemove', (e) => {
  postition.style.setProperty('--x', e.clientX + 'px');
  postition.style.setProperty('--y', e.clientY + 'px');
});

let emojis = document.querySelectorAll('.emoji');
let missingEmoji = document.querySelectorAll('.missing_emoji');

let moji;

console.log(emojis);

emojis.forEach((e) => {
  e.addEventListener('click', (e) => {
    console.log(e.target.className);
    e.target.style.display = 'none';
  });

  e.addEventListener('mouseenter', (e) => {
    e.target.classList.add('tranform_scale_up');
    console.log('this emoji is :' + e.target.className);
  });

  e.addEventListener('mouseleave', (e) => {
    e.target.classList.remove('tranform_scale_up');
    e.target.classList.remove('transform_scale:down');
    console.log('this emoji is :' + e.target.className);
  });
});

function randomMoji(inputArr) {
  let moji;
  // check that array actully is an array
  if (
    Array.isArray(inputArr) &&
    inputArr !== null &&
    inputArr !== undefined &&
    inputArr.length !== 0
  ) {
    moji = inputArr[Math.floor(Math.random() * inputArr.length)];
  } else {
    console.log('No array of words is found, need one to function');
  }
  return moji;
}

moji = randomMoji(emojis);

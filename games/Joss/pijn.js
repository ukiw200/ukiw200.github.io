const fistButton = document.getElementById('fistButton');
const flatHandButton = document.getElementById('flatHandButton');
const gwnHandButton = document.getElementById('GwnHand');
const container = document.getElementById('container');
const hand = document.getElementById('hand');
const target = document.getElementById('target');

const messages = [
  "Harder!",
  "Kom op, pussy!",
  "Geef me er nog eentje!",
];

const loveMessage = "Ik hou ook van jou Joss ❤️";

let messageIndex = 0;

fistButton.addEventListener('click', () => {
  slap('fist');
});

flatHandButton.addEventListener('click', () => {
  slap('flat');
});

gwnHandButton.addEventListener('click', () => {
  slap('hand');
});

function slap(handType) {
  const targetPositionX = target.offsetLeft + (target.offsetWidth / 2) - (hand.offsetWidth / 2);
  const targetPositionY = target.offsetTop + (target.offsetHeight / 2) - (hand.offsetHeight / 2);

  animateSlap(targetPositionX, targetPositionY, handType);
}

function animateSlap(targetX, targetY, handType) {
  hand.src = getHandImage(handType);
  hand.style.opacity = 1;
  hand.style.transform = `translate(${targetX}px, ${targetY}px)`;

  setTimeout(() => {
    hand.style.opacity = 0;
    hand.style.transform = 'translate(0, 0)';
    showMessage();
  }, 500);
}

function getHandImage(handType) {
  switch (handType) {
    case 'fist':
      return 'vuist.png';
    case 'flat':
      return 'plattahand.png';
    case 'hand':
      return 'hand.png';
    default:
      return '';
  }
}

function showMessage() {
  if (messageIndex < messages.length) {
    alert(messages[messageIndex]);
    messageIndex++;
  } 
}

function loveMessageA(){
    alert(loveMessage);
}

container.addEventListener('click', (event) => {
  const offsetX = event.offsetX - (target.offsetWidth / 2);
  const offsetY = event.offsetY - (target.offsetHeight / 2);
  target.style.left = offsetX + 'px';
  target.style.top = offsetY + 'px';
  target.style.opacity = 1;
});

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onBtnStartClick);
refs.stopBtn.addEventListener('click', onBtnStopClick);

let timerId;
function onBtnStartClick() {
  timerId = setInterval(() =>
  (document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]), 1000);
  
  refs.startBtn.removeEventListener('click', onBtnStartClick)
};

function onBtnStopClick() {
  clearInterval(timerId);
  refs.startBtn.addEventListener('click', onBtnStartClick);
};
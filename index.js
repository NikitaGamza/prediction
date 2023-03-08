const predWish = [
  'Money',
  'Lucky',
  'Health',
  'Beer',
  'Travel',
  'Shopping',
  'Learn Js',
  'Что-то на русском',
  'Watch film',
  'Love',
];
const predList = document.getElementById('list');
function getPredict() {
  window.timerId = setInterval(() => {
    predList.innerHTML = Math.floor(Math.random() * predWish.length);
  }, 100);
}

function stopPredict() {
  clearInterval(window.timerId);
  let wish = predWish[predList.innerHTML];
  if (wish === undefined) {
    predList.innerHTML = 'Вы не запустили предсказателя';
  } else {
    predList.innerHTML = wish;
  }
  let btn = document.getElementById('btnPredict');
  btn.style.display = 'none';
}

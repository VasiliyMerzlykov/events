const hit = document.getElementsByClassName('hit')[0];
const miss = document.getElementsByClassName('miss')[0];

window.addEventListener('mousedown', (e) => {
  if (e.target.matches('.img')) {
    if (+hit.textContent === 5) {
      alert('Вы выйграли');
      miss.textContent = 0;
      hit.textContent = 0;
      return true;
    }
    e.target.style.cursor = 'url("../src/img/hammer.jpg"), pointer';
    hit.textContent = +hit.textContent + 1;
  } else {
    if (+miss.textContent === 5) {
      alert('Вы проиграли');
      miss.textContent = 0;
      hit.textContent = 0;
      return true;
    }
    miss.textContent = +miss.textContent + 1;
  }
  return true;
});

window.addEventListener('mouseup', (e) => {
  e.target.style.cursor = 'auto';
});

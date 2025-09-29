let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');
let score = document.getElementById('score');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
  let newHeight = Number(height.value); 
  let newWeight = Number(weight.value); 
  newHeight /= 100; 

  let sqHeight = newHeight * newHeight;
  let bmiValue = newWeight / sqHeight;
  score.textContent = bmiValue.toFixed(1);
  result.style.display = 'block';

  if (bmiValue < 18.16) {
    score.style.backgroundColor = 'green';
  } else if (bmiValue >= 18.16 && bmiValue < 20.9) {
    score.style.backgroundColor = 'blue';
  } else {
    score.style.backgroundColor = 'red';
  }
});

let form = document.getElementById('form');
form.addEventListener('submit', (ev) => {
  ev.preventDefault(); 
});

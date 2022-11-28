const textArea = document.querySelector('.form__text');
const form = document.querySelector('.page__form');
const submitBtn = document.querySelector('.form__button');

const countProbability = (text) => {
  const symbols = new Object();
  let symbol = null;
  const probabilities = new Object();

  for (let i = 0; i < text.length; i++) {
    symbol = text[i];
    if (symbol === ' ') {
      symbol = 'пробел';
    }

    if (symbols[symbol]) {
      symbols[symbol] += 1;
    } else {
      symbols[symbol] = 1;
    }
  }

  for (let [key, value] of Object.entries(symbols)) {
    probabilities[key] = value / text.length;
  }

  return probabilities;
}

const processForm = (form) => {
  const data = new FormData(form);
  const userText = data.get('userText');

  const probabilities = countProbability(userText);
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  processForm(evt.target);
});

let ctx = document.querySelector('.canvas').getContext('2d');
let myChart = new Chart(ctx, {

});
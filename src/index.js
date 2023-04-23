import _ from 'lodash';
import './style.css';
import scores from './modules/playerScores.js';
import addScore from './modules/addPlayerScores.js';

scores();
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => scores());

const form = document.querySelector('.container2');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;
  addScore(name, score);
  form.reset();
});

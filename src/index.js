import _ from 'lodash';
import './style.css';
import playersData from './modules/data.js';

const scores = document.querySelector('#scores');

playersData.forEach((data, i) => {
  scores.innerHTML
    += i % 2 === 1
      ? `<div class="player-details even">${playersData[i].name} : ${playersData[i].score}</div>`
      : `<div class="player-details">${playersData[i].name} : ${playersData[i].score}</div>`;
});

import { baseUrl, gameName } from './data.js';

const score = document.querySelector('#scores');

export default async () => {
  try {
    const response = await fetch(`${baseUrl}games/${gameName}/scores/`);
    const playerData = await response.json();
    score.innerHTML = '';
    playerData.result.forEach((data, i) => {
      score.innerHTML
        += i % 2 === 1
          ? `<div class="player-details even">${data.user} : ${data.score} </div>`
          : `<div class="player-details">${data.user} : ${data.score} </div>`;
    });
  } catch (error) {
    throw new Error('Data could not be fetched');
  }
};

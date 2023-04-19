import { baseUrl, gameName } from './data.js';

export default async (user, score) => {
  const response = await fetch(`${baseUrl}games/${gameName}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score: Number(score),
    }),
  });

  const outcome = await response.json();

  return outcome;
};

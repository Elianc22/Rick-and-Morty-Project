const apiFetchCards = (endpoint) => {
  return fetch(`https://rickandmortyapi.com/api/${endpoint}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(async (response) => {
    const cardData = await response.json();
    return cardData;
  });
};

export default apiFetchCards;

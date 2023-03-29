const apiFetchCards = (endpoint, endpointSearch) => {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${endpoint}&name=${endpointSearch}`,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  ).then(async (response) => {
    const cardData = await response.json();
    return cardData;
  });
};

export default apiFetchCards;

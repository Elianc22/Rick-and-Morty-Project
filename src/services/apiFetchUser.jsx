const apiFetchUser = (endpoint, token) => {
  // eslint-disable-next-line no-undef
  return fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  }).then(async (response) => {
    const data = await response.json();
    return data;
  });
};

export default apiFetchUser;

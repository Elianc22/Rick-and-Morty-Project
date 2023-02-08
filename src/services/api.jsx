const API_URL = 'https://sessions.cyclic.app/api';

const signUp = (endpoint, userName, userEmail, password) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullname: userName,
      email: userEmail,
      password
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      throw new Error(`HTTP error! status: ${error}`);
    });
};

export default signUp;

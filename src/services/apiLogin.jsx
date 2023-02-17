const API_URL = 'https://sessions.cyclic.app/api';

const logIn = (endpoint, userEmail, password) => {
  return fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: userEmail,
      password
    })
  })
    .then((response) => {
      const data = response.json();
      if (data.token) {
        localStorage.setItem({ token: data.token });
      }
      return data;
    })
    .catch((error) => {
      throw new Error(`HTTP error! status: ${error}`);
    });
};

export default logIn;

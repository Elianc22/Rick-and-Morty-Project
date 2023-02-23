const signUp = (endpoint, userName, userEmail, password) => {
  // eslint-disable-next-line no-undef
  return fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
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
    .catch((error) => {
      throw new Error(`HTTP error! status: ${error}`);
    });
};

export default signUp;

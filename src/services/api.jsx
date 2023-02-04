fetch('https://sessions.cyclic.app/api', {
  method: 'POST',
  body: {
    name: 'elian foo',
    email: 'foo@fff',
    password: 'sd334'
  }
})
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error(error);
  });

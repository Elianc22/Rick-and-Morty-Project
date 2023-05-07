# Rick and Morty Wiki

For this project, I implemented a web with a signup and login feature, that enables the user to create an account and then log in into it. The technologies user for this were: ReactJs, JavaScript, API fetch, HTML, Sass, Bootstrap, CSS, Formik. Also, prettier and EsLint to ensure clean code and prevent errors.

For the login and signup pages I used react router fro three different pages(login, signup and home) to navigate from one page to the other.
The home page was only visible by auth with a token that is saved on localStorage once the user is logged in.

On the sign up page I created a form in which I made a POST to an AIP Rest sending the user data once it was submited. Once it's submited, the user is redirected to the login page.

The login page has a formulary that send a GET request once the user submits the data and verifies the data is equal to the one contained on the API. After that, if the data is correct, the request response is the auth token that is saved in localStorage, as metioned earlier, and then redirects to the home page. If the data is incorrect, the page will the display the corresponding error.

Once the user is placed on the home page, the header will display a custom Welcome text with his name, this data is obtained when the user submits the login form and the GET request is sent. Once the data is obtained, it's displayed on the header.

We have a display of cards containing each character of the Rick And Morty show, with a custom tag showing life status. This tag is displayed on red when the character is dead and green when it's alive, if life status is unknown, we display it on gray. Cards also show the last known location.
A favorite feature was implemented here as well. Each card has a heart icon that turns red when clicked. Once a character is liked, it is saved on the 'favorites' section, that can be accessed with the header tab. If a character is already liked and we click the heart again, it will be removed from favorites.

To display the cards we implement an initial state where we have all the cards saved on an array. We also have a search bar feature, that works creating a useEffect where we filter the cards comparing the card name (on the previously mentioned array) to the string placed on the search.

**You can see the live demo of this project [here](https://rick-and-morty-project-rust.vercel.app/).**

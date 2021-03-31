# Web-Development-Professional-Nanodegree-Program-Weather-Journal-App
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.
Getting Started
Introduction
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

Project Rubric
Your project will be evaluated by a Udacity code reviewer according to the Weather-Journal project rubric. Please review the rubric for detailed project requirements. If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own. But, it can be a bit challenging having to start from scratch, so we do provide a starter project (i.e., a "skeleton") to use.

Get the Starter Code
You can download the starter code below by cloning the specific branch 'refresh-2019':

The Weather Journal project repository
The starter code has all the elements and CSS you will need to complete the project, plus a little help getting started with the JavaScript. If you decide to start development on your own and then get stuck, you can always take a peek at the starter code available at the links provided for inspiration.

If you want to try the project without the starter code, and would like to use a comments only version of the finished JS code, you can find that at the link below.

Comments only version of final JS code (commentsOnlyJS directory)
Web APIs and Asynchronous Applications
Great! You now have the starter code. Before moving forward, make sure you are comfortable with the content from Web APIs and Asynchronous Applications.

Ask yourself:

How do I setup a Node environment with Express and the necessary project dependencies?
How do I setup a server with GET and POST routes?
How do I create developer credentials for a Web API?
How do I use the Fetch API with my credentials and user input to get dynamic data into my app routes?
How do I access a GET route on the server side, from a function called on the client side?
How do I chain Promises together
How do I access HTML elements with JavaScript and set their properties dynamically?

Development Strategy
For this project, you will be writing most of your code in two files: server.js and website/app.js. Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

Testing
Testing your code as you go is an excellent development approach. If you would like to write and run tests for parts of your implementation code, you can use the file tests.js to see examples of test code you might write along the development path.

Feel free to implement your own design workflow, but if you get stuck -- here is a walkthrough to get you up and running!

Start by setting up your project environment. Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and them include them your server.js file.
Create a server running on the port of your choosing
Add a console.log() to the server callback function, and test that your server is running using Node in the terminal to run the file server.js
Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
The POST route should anticipate receiving three pieces of data from the request body
temperature
date
user response
Make sure your POST route is setup to add each of these values with a key to projectData.
Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
Inside that callback function call your async GET request with the parameters:
base url
user entered zip code (see input in html with id zip)
personal API key
After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.

You will need to write another async function to make this POST request.
The function should receive a path and a data object.
The data object should include
temperature
date
user response
Remember, you can access the value of DOM elements by selecting them in your JS code.
Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:

Temperature
Date
User input


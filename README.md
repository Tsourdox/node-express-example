# Node Express Example

This app is just to chowcase the fundamentals of express.
Creating a server that serves stacking files but also utilizes middlewares to first count each visiting user.
It also defines a structure for an API that can be used for further development.
In this case only the GET method of the API is implemented and returns a JSON object with the number of visitors.

The public files in this project only displayes a simple web page that onload makes a GET request to the API and retrives the number of visitors and displays it on the page.

## Install instructions

1. Run `npm i` to install dependencies
2. Run `node server.js` to run the server on port 3000


**Enjoy =)**
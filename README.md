# Node Express Example

This project is just to showcase the fundamentals of express.
It creates a server that serves static files but also utilizes middlewares to first count each visiting user.
It also defines a structure for a basic API that can be used in further development.
In this case only the GET method of the API is implemented and returns a JSON object with the number of visitors.

The public files in this project only displayes a simple web page that onload makes a GET request to the API and retrives the number of visitors and displays it on the page.

## Usage

1. Run `npm i` to install dependencies
2. Run `node server.js` to run the server on port 3000


**Enjoy =)**
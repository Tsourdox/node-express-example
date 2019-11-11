const express = require('express')
const app = express()
const port = 3000

let nrOfVisitors = 0

app.get('/', function(req, res, next) {
    nrOfVisitors++

    // Jumps to the next middleware. In this case
    // serving the static files folder since it's also
    // added to the "/" path at the bottom of this file.
    next()
})

app.get('/api', function (req, res) {
    res.json({
        message: 'thank you for checking out our api',
        count: nrOfVisitors
    })
})

app.post('/api', function (req, res) {
    res.send('Got a POST request')
})

app.put('/api', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/api', function (req, res) {
    res.send('Got a DELETE request at /user')
})

/* Static files can be accessed from this folder */
app.use(express.static('public'))

/* Start server */
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express');
const app = express();
const util = require('./util');
const port = 8080;

app.use(express.json());

app.get('/status', (req, resp) => {

    resp.send('OK');
});

app.post('/subtraction', (req, resp) => {
    const mcqs = util.generateQuestions(req.body.numOfQ, req.body.minuendDigit, req.body.subtrahendDigit, req.body.borrowing);
    
    resp.send(mcqs);
})

// app.listen(port, () => {
//     console.log(`server started on port: ${port}`);
// });

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

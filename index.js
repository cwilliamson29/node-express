const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3003;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all("/dishes", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next()
});
/***************DISHES***************/
app.get('/dishes', (req, res, next) => {
    res.end('will send all ')
});
app.post('/dishes', (req, res, next) => {
    res.end('will send all: ' + req.body.name + ' with details: ' + req.body.description);
})
app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on/dishes');
})
app.delete('/dishes', (req, res, next) => {
    res.end('delete all ')
});


/***************DISHES ID***************/
app.get('/dishes/:dishId', (req, res, next) => {
    res.end('will send ' + req.params.dishId)
});
app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on/dishes/' + req.params.dishId);
})
app.put('/dishes/:dishId', (req, res, next) => {
    res.write('will update ' + req.params.dishId + '\n')
    res.end('will update ' + req.body.name + ' with details: ' + req.body.description)
})
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('will delete ' + req.params.dishId)
});

app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1> express server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})

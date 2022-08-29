const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

/***************DISHES***************/
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next()
    })
    .get((req, res, next) => {
        res.end('will send all ')
    })
    .post((req, res, next) => {
        res.end('will send all: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on/dishes');
    })
    .delete((req, res, next) => {
        res.end('delete all ')
    });

/***************DISH ID***************/
dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next()
    })
    .get((req, res, next) => {
        res.end('will send DISH ID ' + req.params.dishId + '\n')
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes');
    })
    .put((req, res, next) => {
        res.write('will update ' + req.params.dishId + '\n');
        res.end('will update ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('delete DISH ID ' + req.params.dishId + '\n')
    });

module.exports = dishRouter;

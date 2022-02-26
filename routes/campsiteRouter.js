//this module handles the REST api endpoints for campsites and campsites/campsiteId
const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/') //no semicolon b/c it signals the end of a statement 
//.all is a routing method that is a catch-all for all HTTP verbs
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //next passes control of the app routing to the next relevant routing method
    //otherwise it stops here
    next();
}) //no semicolon b/c it signals the end of a statement 
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsites: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

//all of the above methods are chained together and technically one single statement
// (actually kinda cool)

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send the campsite ${req.params.campsiteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supposed on /campsites/${req.params.campsiteId}`)
})
.put((req, res) => {
    res.end(`Will update ${req.params.campsiteId} with name: ${req.body.name}, description: ${req.body.description}`)
})
.delete((req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
})


module.exports = campsiteRouter;
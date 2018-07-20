const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.route('/')
  .all((req, res, next)=> {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        next();
  })
  .get((req, res, next) => {
        res.end("Will send all the dishes to you");
  })
  .post((req, res, next) => {
        res.end("will add the dish: " + req.body.name +  " with details: " + req.body.description);
   })
  .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on "+ req.originalUrl);
   })
   .delete((req, res, next) => {
        res.end("Deleting all the dishes: ");
   });

dishRouter.route('/:dishId')
   .all((req, res, next)=> {
         res.statusCode = 200;
         res.setHeader('Content-Type','text/plain');
         next();
   })
   .get((req, res, next) => {
     res.end("Will send the details of the dish " + req.params.dishId + " to you!");
   })
   .post((req, res, next) => {
     res.statusCode = 403;
     res.end("POST operation not permitted on this " + req.originalUrl);
   })
   .put((req, res, next) => {
     res.write("Updating the dish: " + req.params.dishId + "\n");
     res.end("Will update the dish " + req.body.name + " with details " + req.body.description);
   })
   .delete((req, res, next) => {
     res.statusCode = 403;
     res.end("POST operation not permitted on this" + req.originalUrl)
   });



module.exports = dishRouter;
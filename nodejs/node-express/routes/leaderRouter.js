const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.route('/')
  .all((req, res, next)=> {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        next();
  })
  .get((req, res, next) => {
        res.end("Will send all the leaders to you");
  })
  .post((req, res, next) => {
        res.end("will add the leader: " + req.body.name +  " with details: " + req.body.description);
   })
  .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on "+ req.originalUrl);
   })
   .delete((req, res, next) => {
        res.end("Deleting all the list of leaders: ");
   });

leaderRouter.route('/:leaderId')
   .all((req, res, next)=> {
         res.statusCode = 200;
         res.setHeader('Content-Type','text/plain');
         next();
   })
   .get((req, res, next) => {
     res.end("Will send the details of the leader " + req.params.leaderId + " to you!");
   })
   .post((req, res, next) => {
     res.statusCode = 403;
     res.end("POST operation not permitted on this " + req.originalUrl);
   })
   .put((req, res, next) => {
     res.write("Updating the leader: " + req.params.leaderId + "\n");
     res.end("Will update the leader " + req.body.name + " with details " + req.body.description);
   })
   .delete((req, res, next) => {
     res.statusCode = 403;
     res.end("POST operation not permitted on this" + req.originalUrl)
   });



module.exports = leaderRouter;

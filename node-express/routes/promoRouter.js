const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
  .all((req, res, next)=> {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        next();
  })
  .get((req, res, next) => {
        res.end("Will send all the promotions to you");
  })
  .post((req, res, next) => {
        res.end("will add the promotion: " + req.body.name +  " with details: " + req.body.description);
   })
  .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on "+ req.originalUrl);
   })
   .delete((req, res, next) => {
        res.end("Deleting all the promotions: ");
   });

promoRouter.route('/:promotionId')
   .all((req, res, next)=> {
         res.statusCode = 200;
         res.setHeader('Content-Type','text/plain');
         next();
   })
   .get((req, res, next) => {
     res.end("Will send the details of the promotion " + req.params.promotionId + " to you!");
   })
   .post((req, res, next) => {
     res.statusCode = 403;
     res.end("POST operation not permitted on this " + req.originalUrl);
   })
   .put((req, res, next) => {
     res.write("Updating the promotion: " + req.params.promotionId + "\n");
     res.end("Will update the promotion " + req.body.name + " with details " + req.body.description);
   })
   .delete((req, res, next) => {
     res.statusCode = 403;
     res.end("POST operation not permitted on this" + req.originalUrl)
   });



module.exports = promoRouter;

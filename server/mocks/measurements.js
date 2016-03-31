/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var measurementsRouter = express.Router();

  measurementsRouter.get('/', function(req, res) {
    if (req.query.page === '0') {
      res.send({
        'measurements': [{id: 1, section_id: req.query.sectionId, value: 123, timestamp: "1 sec ago"},
          {id: 2, section_id: req.query.sectionId, value: 234, timestamp: "2 sec ago"},
          {id: 3, section_id: req.query.sectionId, value: 345, timestamp: "3 sec ago"},
          {id: 4, section_id: req.query.sectionId, value: 456, timestamp: "4 sec ago"},
          {id: 5, section_id: req.query.sectionId, value: 567, timestamp: "5 sec ago"},
          {id: 6, section_id: req.query.sectionId, value: 678, timestamp: "6 sec ago"},
          {id: 7, section_id: req.query.sectionId, value: 789, timestamp: "7 sec ago"},
          {id: 8, section_id: req.query.sectionId, value: 898, timestamp: "8 sec ago"},
          {id: 9, section_id: req.query.sectionId, value: 987, timestamp: "9 sec ago"},
          {id: 10, section_id: req.query.sectionId, value: 876, timestamp: "10 sec ago"}],
        "meta" : {
          "sort" : "id: ASC",
          "size" : 10,
          "number" : 0,
          "totalPages" : 2,
          "numberOfElements" : 10,
          "totalElements" : 11,
          "firstPage" : true,
          "lastPage" : false
        }
      });
    } else {
      res.send({
        'measurements': [{id: 11, section_id: req.query.sectionId, value: 765, timestamp: "11 sec ago"}],
        "meta" : {
          "sort" : "id: ASC",
          "size" : 10,
          "number" : 1,
          "totalPages" : 2,
          "numberOfElements" : 1,
          "totalElements" : 11,
          "firstPage" : false,
          "lastPage" : true
        }
      });
    }
  });

  measurementsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  measurementsRouter.get('/:id', function(req, res) {
    res.send({
      'measurements': {
        id: req.params.id
      }
    });
  });

  measurementsRouter.put('/:id', function(req, res) {
    res.send({
      'measurements': {
        id: req.params.id
      }
    });
  });

  measurementsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/measurements', require('body-parser').json());
  app.use('/api/measurements', measurementsRouter);
};

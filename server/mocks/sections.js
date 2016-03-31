/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var sectionsRouter = express.Router();

  sectionsRouter.get('/', function(req, res) {
    if (req.query.page === '0') {
      res.send({
        'sections': [{id: 1, name: "aaaa", description: "aaaaaaaa"},
          {id: 2, name: "bbbb", description: "bbbbbbbb"},
          {id: 3, name: "cccc", description: "cccccccc"},
          {id: 4, name: "dddd", description: "dddddddd"},
          {id: 5, name: "eeee", description: "eeeeeeee"},
          {id: 6, name: "ffff", description: "ffffffff"},
          {id: 7, name: "gggg", description: "gggggggg"},
          {id: 8, name: "hhhh", description: "hhhhhhhh"},
          {id: 9, name: "iiii", description: "iiiiiiii"},
          {id: 10, name: "jjjj", description: "jjjjjjjj"}],
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
        'sections': [{id: 11, name: "kkkk", description: "kkkkkkkk"}],
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

  sectionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  sectionsRouter.get('/:id', function(req, res) {
    res.send({
      'sections': {
        id: req.params.id
      }
    });
  });

  sectionsRouter.put('/:id', function(req, res) {
    res.send({
      'sections': {
        id: req.params.id
      }
    });
  });

  sectionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/sections', require('body-parser').json());
  app.use('/api/sections', sectionsRouter);
};

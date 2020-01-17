var express = require('express');
var router = express.Router();
var client = require('../esconnection.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express + ElasticSearch by Alan.' });

});

router.get('/add', function(req, res, next) {

  client.index({  
    index: 'customer',
    type: 'person',
    body: {
      "Name": "Alan",
      "LastName": "Nevot",
      "Phone": "1144469173"
    }
  },function(err,resp,status) {
      console.log(resp);
      console.log(status + err)
  });

  res.render('index', { title: 'Adding an Alan to ES.' });

});

router.get('/get', function(req, res, next) {

  client.search({  
    index: 'customer',
    type: 'person',
    body: {
      query: {
        match: { "Name": "Alan" }
      },
    }
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
      }
  });

  res.render('index', { title: 'Querying Express + ElasticSearch by Alan.' });

});

module.exports = router;

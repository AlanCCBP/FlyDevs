var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'http://172.24.0.1:9200/'
  ]
});

module.exports = client; 
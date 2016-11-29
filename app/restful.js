

function getquote(){
var http = require('http')
 var options = {
        host: 'https:/'/andruxnet-random-famous-quotes.p.mashape.com/'cat=',
        method: 'GET',
        headers: {'Quotes': 'node.js'}
    };
http.get(options,function(response){
	response.on('data', console.log)

response.on('error', console.error)

response.setEncoding('utf8')} 
)};
    
    getquote();
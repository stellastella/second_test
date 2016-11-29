var http = require('http');
console.log("Trying my http request");
http.get("http://ip-api.com/json/197.210.25.129", function(res) {
  var body = '';
  res.on('data', function(data){
    body += data;
  });
  res.on('end', function() {
    var parsed = JSON.parse(body);
    console.log(parsed);
  });
})
.on('error', function(e) {
  console.error("Got error: " + e.message);
});

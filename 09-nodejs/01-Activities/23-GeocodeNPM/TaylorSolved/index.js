var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'mapquest',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'MVuTZjCa4tTD7eUA3t9DTqfSjS6yh61G', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);

var userInput = process.argv;

var search = process.argv[2];

for (var i = 3; i < userInput.length; i++) {
    search += ' ' + userInput[i];
}
 
// Using callback
geocoder.geocode(search, function(err, res) {
  console.log(JSON.stringify(res, null, 2));
});
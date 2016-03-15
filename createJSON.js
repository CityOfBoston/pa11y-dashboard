var jsonfile = require('jsonfile')

var file = './config/production.json'
var obj = {
	"port": process.env.$PORT,
	"noindex": true,
	"readonly": false,

	"webservice": "https://cob-pa11y-dashboard-api.herokuapp.com"
}

jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})

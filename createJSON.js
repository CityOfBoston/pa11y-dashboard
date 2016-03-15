var jsonfile = require('jsonfile')

var file = './config/production.json'
var obj = {
	"port": process.env.$PORT,
	"noindex": true,
	"readonly": false,

	"webservice": {
		"database": process.env.MONGOLAB_URI,
		"host": "0.0.0.0",
		"port": 3000,
		"cron": "0 30 0 * * *"
	}
}

jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})

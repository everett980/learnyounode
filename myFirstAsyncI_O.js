var fs = require('fs');
fs.readFile(process.argv[2], function processContents(err, contents) {
	console.log(contents.toString().split('\n').length - 1);
})
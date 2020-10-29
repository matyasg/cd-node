var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const { exec } = require('child_process');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
 });

var port = 2000;

app.get('/gitpull', function (req, res, next) {
	
	exec('sh /home/smartuscrm/CRM/cd-node/node/devel.sh', (err, stdout, stderr) => {
    fs.writeFile('/home/smartuscrm/CRM/cd-node/node/test.txt', err+"-------"+stdout+"--------"+stderr, function (error) {
        if (error) throw error;
        console.log('Saved!');
    });
    if (err) {
        //some err occurred
        console.error(err)
        console.log(err)
    fs.appendFile('/home/smartuscrm/CRM/cd-node/node/test.txt', err+"-------"+stdout+"--------"+stderr, function (error) {
        if (error) throw error;
        console.log('Saved!');
    });
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});

});

app.listen(port, function(){
    console.log('Server is running at port: ',port);
  });

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const { exec } = require('child_process');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
 });

var port = 2000;

app.get('/gitpull', function (req, res, next) {

});

app.listen(port, function(){
    console.log('Server is running at port: ',port);
  });

exec('sh /home/smartuscrm/CRM/cd-node/node/devel.sh', (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});

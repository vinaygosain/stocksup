// grab the packages we need
var express = require('express');
var path = require('path');
var routes = express.Router();
var port = process.env.PORT || 8080;
 var jsonfile = require('jsonfile');

var data;
// routes will go here
routes.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next();
})


routes.get('/', function (req, res) {
   
    var file = './data/data.json';
    jsonfile.readFile(file, function (err, obj) {
        if (obj) {
            data = obj;
        }
        res.send(data);
    });
});


routes.put('/:id', function (req, res) {

    var id = req.params.id

    jsonfile.readFile('./data/data.json', function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }

        var dataArr = data.filter(function (tile) {
            return tile.id != id;
        })

        req.on('data', function (obj1) {
            var buf = new Buffer.from(obj1);
            dataArr.push(JSON.parse(buf))
        });
        req.on('end', function () {
            jsonfile.writeFile('./data/data.json', dataArr, function (err) {
                if (err)
                    throw err
                res.send(dataArr);
            }); 
        })
    });
});


module.exports = routes;

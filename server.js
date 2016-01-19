var mongo = require('mongodb');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest : 'uploads/' });
var GridStore = mongo.GridStore;
var ObjectID = mongo.ObjectID;

app.use(express.static('public'));
app.use( bodyParser.urlencoded( { extended : false } ) );

app.get('/upload.html', function (req, res) {
    res.sendFile( __dirname + "/" + "upload.html" );
})

app.post('/upload' , upload.single('file'), function(req , res){
    var db = new mongo.Db('test', new mongo.Server("127.0.0.1", 27017));

    db.open(function (err , db) {
        if (err) return handleError(err);
        var gridStore = new GridStore( db , new ObjectID() , req.file.originalname, 'w');
        gridStore.open(function(err , gridStore){
            gridStore.writeFile( req.file.path , function(err , doc){

            })
        })
        res.send('upload success');
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Upload app listening at http://%s:%s", host, port)
})


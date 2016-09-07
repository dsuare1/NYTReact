var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');

var app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/nytreact');
// for livehost:
// mongoose.connect('');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// ------------------------------------------------------------------------
// Express routes
// ------------------------------------------------------------------------
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// app.get('/api/saved', function(req, res) {

//   History.find({}).sort([['date', 'descending']]).limit(5)
//     .exec(function(err, doc){

//       if(err){
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     })
// });

// app.post('/api/saved', function(req, res){
//   var newSearch = new History(req.body);
//   console.log("BODY: " + req.body.location);

//   History.create({"location": req.body.location, "date": Date.now()}, function(err){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   })
// });

// app.delete('/api/saved', function(req, res) {

// });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

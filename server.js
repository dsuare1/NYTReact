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

app.get('/api/saved', function(req, res) {
  Article.find({}).sort([['date', 'descending']])
    .exec(function(err, docs){

      if(err){
        console.log(err);
      }
      else {
        res.send(docs);
        console.log(docs);
      }
    })
});

app.post('/api/save', function(req, res){
  Article.create({"title": req.body.title, "url": req.body.url, "date": Date.now()}, function(err){
    if(err){
      console.log(err);
    }
    else {
      console.log("Article Saved to DB");
      res.send('article saved');
    }
  })
});

// app.delete('/api/saved', function(req, res) {

// });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

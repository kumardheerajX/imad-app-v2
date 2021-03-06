var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    username:'kumardheerajx',
    database:'kumardheerajx',
    host:'db.imad.hasura-app.io',
    pory:'5432',
    password:process.env.DB_PASSWORD,
    
};
var app = express();
app.use(morgan('combined'));

var content={
    title:'Article-one|Dheeraj Kumar',
heading:'Artilce-One',
date:'feb 20,2017',
content:`<p>
                        This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article 
                        </p>
                        
                         <p>
                        This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article 
                        </p>
                        
                         <p>
                        This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article  This is the Content for my First Article 
                        </p>`
};
                        
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req,res){
    //make a select request
    //return a response with the results
    pool.query('Select * from test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
            }else{
                res.send(JSON.strinify(result.rows));
            }
        
    });
    
});

app.get('/article-one', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
}); 

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

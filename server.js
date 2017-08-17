var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
'article-one':{
    title: 'Article-one | Piyal De',
    heading: 'Article one',
    date: 'August 15, 2017',
    content:`<p>
		hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..
		</p>	

		<p>
		hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..
		</p>

		<p>
		hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..<br>hello every one !! welcome to my first blog..
		</p>`
},

'article-two':{
    title: 'Article-two | Piyal De',
    heading: 'Article two',
    date: 'August 25, 2017',
    content:`	<p>
		hello every one !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..
		</p>	

		<p>
		hello every one !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..
		</p>

		<p>
		hello every one!! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..<br>hello every two !! welcome to my second blog..
		</p>`
},

'article-three':{
    title: 'Article-three | Piyal De',
    heading: 'Article three',
    date: 'August 30, 2017',
    content:`	<p>
	      hello every one !! welcome to my third blog..<br>First Line..
		
		</p>	

		<p>
		hello every one !! welcome to my third blog..<br>Second Line..
		</p>`
    
}
};


function createTemplate(data)
{
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`
<!DOCTYPE HTML>
<html>
	<head>
		
		<title>
			
			    ${title}
			
		</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="container">
	<div>
		<a href="/">HOME</a>
	</div>
	<hr/>
	<h1>
		${heading}
	</h1>
	<div>
		${date}
	</div>
	<br>
	<br>
	<div>
		${content}
	</div>
	</div>
</body>

<footer>
<p>"Enjoy your day till the worst comes..else wait in tense for the end..choice is yours"</p>
<p>Contact Information : 
	<a href="mailto:piyalde2009@gmail.com">piyalde2009@gmail.com</a>
</p>
</footer>
</html>`;

return htmlTemplate;
}

var counter=0;
app.get('/counter', function(req, res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName
  res.send(createTemplate(articles[articleName]));
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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

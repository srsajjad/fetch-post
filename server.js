var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');



 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })



app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

app.get('/showTasks',function(req,res){

	var taskList = JSON.parse(fs.readFileSync('database.txt','utf8'));
	res.send(taskList);
});


app.post('/addTask',function(req,res){

	console.log(req.body);

	var taskArr = JSON.parse(fs.readFileSync('database.txt','utf8'));

	taskArr.push(req.body.task);

	var pushTask = fs.writeFileSync('database.txt',JSON.stringify(taskArr),'utf8');


	
	

});















 
app.listen(8080,function(){
	console.log('listening to the fucking port 8080');
})

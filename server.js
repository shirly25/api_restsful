const express = require('express');
const app = express();
const fs = require("fs");

let user = {
	"user4":{
		"name": "mohit",
		"password" : "password4",
		"profession": "teacher",
		"id": 4
	}
}

/* 
*
*method >ListUsers
*
*/

app.get('/listUsers', function (req, res){
	fs.readFile( __dirname + "/" + "users.json",'utf8', function(err,data){
		console.log(data);
		res.send(data);
	});
})

/* 
*
*method >addUsers
*
*/
app.post('/addUser', function (req, res){
	fs.readFile( __dirname + "/" + "users.json",'utf8', function(err,data){
		data = JSON.parse(data);
		data["user4"]= user["user4"];
		console.log(data);
		res.send(JSON.stringify(data));
  });
})
/* 
*
*method >getUsersByID
*method Get: recuperer la ressource d'un utilisateur par son identifiant
*/
app.get('/:id', function (req, res){
	fs.readFile( __dirname + "/" + "users.json",'utf8', function(err,data){
		if(err)throw err;
		//parse users informations to retrieve all ressources
		let users = JSON.parse(data);
		//variable user will retrieve user informations by id
		let user = users["user" + req.params.id]
		//display user information by id
		console.log("User Info by id:" + JSON.stringify(user));
		res.send(JSON.stringify(user));
  });
})
/* 
*
*method >deleteUser
*method Get: Supprimer la ressource d'un utilisateur 
*/
app.delete('/deleteUser', function(req, res){
	fs.readFile( __dirname + "/" + "users.json",'utf8', function(err,data){
		//variable 'data' will contain the result of users informations to retrieve all ressource
		data = JSON.parse(data);
		//delete a user (is:2)
		delete data["user" + 2];
		//display in log data of deleted user
		console.log("Delete user" + data);
		//send the information of the result with the user deleted
		res.send(JSON.stringify(data));
  });
})


let server = app.listen(8081, function(){
	let host = server.address().address
	let port =server.address().port
	console.log("Launch API restful with the following URI http//%%:%s",host, port)
})
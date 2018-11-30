const express = require('express');
const app = express();
const fs = require("fs");

let server = app.listen(8081, function(){
	let host = server.address().address
	let port =server.address().port
	console.log("Launch API restful with the following URI http//%%:%s",host, port)
})
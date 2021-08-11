const http = require('http');

http.createServer((req,res) => {
	console.log(req.url, "ㅁㄴㅇㅁㄴㅇ",req.headers.cookie);
	res.writeHead(200,{'Set-Cookie' : 'mycookie=test'});
	res.end('Hello Cookie');
}).listen(8080)
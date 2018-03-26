var mysql = require('mysql');

var conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "wechat"
	
})

conn.connect();

module.exports = conn;

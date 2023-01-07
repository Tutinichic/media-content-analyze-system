const mysql = require("mysql2");

const connectionOptions = {
  host: "localhost",
  user: "root",
  password: "Qwerty123",
  database: "mediacontentanalyzesystem",
};

const pool = mysql.createConnection(connectionOptions);

module.exports = { pool };

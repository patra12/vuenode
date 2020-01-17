const mysql = require("mysql");

// For database connection MYSQL
function getConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "node_auth"
    });
}

module.exports = getConnection();

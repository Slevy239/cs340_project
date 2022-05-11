const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const cs340_project_server = express();
const DB = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "h1h2h3h4h5",
    database: "oregonizer"
});

DB.query(`
    SELECT * FROM testTable;
`, (err, result) => {
    if (err) {
        console.log(err);
        return 0;
    } else {
        console.log(result);
    }
});

cs340_project_server.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
    return 0;
});

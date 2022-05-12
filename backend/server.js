const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const cs340_project_server = express();
const DB = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "h1h2h3h4h5",
    database: "oregonizer"
});

cs340_project_server.use(cors());

// MIDDLEWARE
cs340_project_server.use(express.json());
cs340_project_server.use(express.urlencoded({ extended: true }));
cs340_project_server.use(bodyParser.json());
cs340_project_server.use(bodyParser.urlencoded({ extended: true }));

// DB.query(`
//     SELECT * FROM testTable;
// `, (err, result) => {
//     if (err) {
//         console.log(err);
//         return 0;
//     } else {
//         console.log(result);
//     }
// });

cs340_project_server.get("/get-teachers", (req, res) => {
    DB.query(`
        SELECT * FROM Teachers;
    `, (err, result) => {
        if (err) {
            // console.log(err);
            throw Error(err);
        } else {
            // console.log(result);
            // res.json(result);
            res.json(result);
        }
    });
});

cs340_project_server.get("/get-courses", (req, res) => {
    console.log("Inside /get-courses");
    DB.query(`
        SELECT 
            Courses.courseID,
            Courses.courseTitle, 
            Courses.courseCapacity,
            Courses.courseDescription,
            Teachers.firstName AS teacherFirstName, 
            Teachers.lastName AS teacherLastName, 
            Teachers.department, 
            Buildings.buildingName
        FROM Courses
        INNER JOIN Teachers
        ON Courses.courseID = Teachers.teacherID
        INNER JOIN Buildings
        ON Courses.building = Buildings.buildingID;
    `, (err, result) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

cs340_project_server.get("/course/:courseTitle", (req, res) => {
    DB.query(`
        SELECT 
            Courses.courseTitle,
            Teachers.firstName AS instructorFirstName,
            Teachers.lastName AS instructorLastName
        FROM Courses
        INNER JOIN Teachers
        ON Courses.courseTeacher = Teachers.teacherID
        WHERE courseTitle = "${req.params.courseTitle}";
        `, (err, result) => {
            if (err) {
            throw new Error(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

cs340_project_server.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
    return 0;
});

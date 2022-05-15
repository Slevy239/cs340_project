const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const cs340_project_server = express();
// const DB = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "h1h2h3h4h5",
//     database: "oregonizer"
// });

const DB = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    port: process.env.asw_port,
    password: process.env.password,
    database: process.env.database
});

cs340_project_server.use((req, res, next) => {
    console.log("hello");
    next();
});

// cs340_project_server.use(() => {
//     DB.query(`
//         SHOW TABLES;
//     `, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log(result);
//             return;
//         }
//     });
// })

// DB.connect(err => {
//     if (err) { 
//         console.log("DATABSE CONNECTION ERROR:,", err);
//         return;
//     }
//     console.log("Connected to AMAZON RDS!");
//     return;
// });


// MIDDLEWARE
cs340_project_server.use(cors());
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

cs340_project_server.get("/api/get-teachers/", (req, res) => {
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

cs340_project_server.get("/api/get-courses", (req, res) => {
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
        ON Courses.courseTeacher = Teachers.teacherID
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

// const getCourses = () => {
//     DB.query(`
//         SELECT 
//             Courses.courseID,
//             Courses.courseTitle, 
//             Courses.courseCapacity,
//             Courses.courseDescription,
//             Teachers.firstName AS teacherFirstName, 
//             Teachers.lastName AS teacherLastName, 
//             Teachers.department, 
//             Buildings.buildingName
//         FROM Courses
//         INNER JOIN Teachers
//         ON Courses.courseID = Teachers.teacherID
//         INNER JOIN Buildings
//         ON Courses.building = Buildings.buildingID;
//     `, (err, result) => {
//         if (err) {
//             throw new Error(err);
//         } else {
//             console.log(result);
//             res.json(result);
//         }
//     });
// };


cs340_project_server.get("/api/course/:courseTitle", (req, res) => {
    DB.query(`
        SELECT 
            Courses.courseID,
            Courses.courseTitle,
            Courses.courseTeacher,
            Courses.courseCapacity,
            Courses.building,
            Courses.courseDescription,
            Teachers.firstName AS instructorFirstName,
            Teachers.lastName AS instructorLastName,
            Buildings.buildingName AS buildingName
        FROM Courses
        INNER JOIN Teachers
        ON Courses.courseTeacher = Teachers.teacherID
        INNER JOIN Buildings
        ON Courses.building = Buildings.buildingID
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

cs340_project_server.put("/api/course/update", (req, res) => {
    console.log("Inside /course/update");
    let buildingID = null;
    let courseTeacherID = null;
    DB.query(`
        SELECT Buildings.buildingID
        FROM Buildings
        WHERE buildingName = "${req.body.courseBuilding}"
    `, (err, result) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log("das hier -->", req.body);
            let buildingID = result[0].buildingID;
            DB.query(`
                SELECT Teachers.teacherID
                FROM Teachers
                WHERE firstName = "${req.body.courseTeacher.split(" ")[0]}" AND lastName = "${req.body.courseTeacher.split(" ")[1]}";
            `, (err, result) => {
                if (err) {
                    throw new Error(err);
                } else {
                    console.log("TEACHER ID:", result[0].teacherID);
                    DB.query(`
                    UPDATE Courses
                    SET
                        courseTitle = "${req.body.courseTitle}",
                        courseTeacher = ${result[0].teacherID},
                        courseDescription = "${req.body.courseDescription}",
                        courseCapacity = ${parseInt(req.body.courseCapacity)},
                        building = ${buildingID}
                    WHERE courseID = ${parseInt(req.body.courseID)};
                    `, (err, result) => {
                        if (err) {
                            throw new Error(err);
                        } else {
                            req.body.buildingID = buildingID;
                            res.json(req.body);
                        };
                    });
                };
            });
        };
    });
});

cs340_project_server.get("/api/teachers", (req, res) => {
    console.log("Inside /teachers");
    DB.query(`
        SELECT * FROM Teachers;
    `, (err, result) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log("TEACHERS:\n", result);
            res.json(result);
        }
    });
});

cs340_project_server.get("/api/buildings-on-campus", (req, res) => {
    DB.query(`
        SELECT * FROM Buildings;
    `, (err, result) => {
        if (err) {
            throw new Error(err);
        } else {
            res.json(result);
        };
    });
});

cs340_project_server.get("/api/students", (req, res) => {
    DB.query(`
        SELECT * FROM Students;
    `, (err, result) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log(result);
            res.json(result);
        };
    });
});

if (process.env.NODE_ENV === "production") {

    // Set static folder
    // All the javascript and css files will be read and served from this folder
    cs340_project_server.use(express.static("client/build"));
  
    // index.html for all page routes  html or routing and naviagtion
    cs340_project_server.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });

    console.log("Succesfull");
}

cs340_project_server.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
    return 0;
});

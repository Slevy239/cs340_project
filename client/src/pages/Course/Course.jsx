// CORE
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// STYLE
import "./style/Course.scss";

const Course = () => {
    const [course, setCourse] = useState(null);
    const location = useLocation();
    const data = location.state;
    console.log(data.courseTitle);

    useEffect(() => {
        fetch(`http://localhost:3450/course/${data.courseTitle}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCourse(data);
            });
    }, []);

    return (
        <>
            <h1>COURSE PAGE</h1>
            {
                course !== null
                ?
                <ul>
                    <li>{course[0].courseTitle}</li>
                    <li>{course[0].courseTeacher}</li>
                </ul>
                : <h1>Nothing here...</h1>
            }
        </>
    );
}

export { Course };

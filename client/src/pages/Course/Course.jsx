// CORE
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// STYLE
import "./style/Course.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const Course = () => {
    const [course, setCourse] = useState(null);
    const [selectedAction, setSelectedAction] = useState("update");

    // COURSE UPDATE FIELD ELEMENTS
    const [courseID, setCourseID] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    const [courseTeacher, setCourseTeacher] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseCapacity, setCourseCapacity] = useState("");
    const [courseBuilding, setCourseBuilding] = useState("");
    const [courseTeacherID, setCourseTeacherID] = useState("");

    const [teachersList, setTeachersList] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const location = useLocation();
    const data = location.state;
    console.log(data.courseTitle);

    useEffect(() => {
        fetch("http://localhost:3450/teachers", { method: "GET" })
            .then(response => response.json())
            .then(teachers => {
                console.log("TEACHERS:", teachers)
                setTeachersList(teachers);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3450/course/${data.courseTitle}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log("DATA HERE -->", data);
                setCourse(data);

                const __course__ = data[0];
                setCourseID(__course__.courseID);
                setCourseTitle(__course__.courseTitle);
                setCourseTeacher(__course__.instructorFirstName + " " + __course__.instructorLastName);
                setCourseDescription(__course__.courseDescription);
                setCourseCapacity(__course__.courseCapacity);
                setCourseBuilding(__course__.buildingName);
                setCourseTeacherID(__course__.courseTeacher);

                setSelectedTeacher(__course__.instructorFirstName + " " + __course__.instructorLastName);
            });
    }, []);

    const handleUpdate = (updateFormEvent) => {
        updateFormEvent.preventDefault();
        fetch("http://localhost:3450/course/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "courseID": courseID,
                "courseTitle": courseTitle,
                "courseTeacher": courseTeacher,
                "teacherID": courseTeacherID,
                "courseDescription": courseDescription,
                "courseCapacity": courseCapacity,
                "courseBuilding": courseBuilding
            })
        })
            .then(result => result.json())
            .then(haris => console.log(haris));
    };

    return (
        <div className="course-outer-container">
            <Header />
            <div className="course-inner-container">
                <div className="course-overview-container">
                    {
                        course !== null
                        ?
                            <>
                                <h1 className="course-title">{course[0].courseTitle}</h1>
                                <h2 className="course-teacher">Professor: {course[0].instructorFirstName} {course[0].instructorLastName}</h2>
                                <p className="course-description">{course[0].courseDescription}</p>
                            </>
                        : null
                    }
                </div>
                <div className="course-action">
                    <div className="course-action-options">
                        {selectedAction === "update" ? <p className="course-action-option course-action-option-active">UPDATE</p> : <p className="course-action-option" onClick={(e) => setSelectedAction("update")}>UPDATE</p>}
                        {selectedAction === "delete" ? <p className="course-action-option course-action-option-active">DELETE</p> : <p className="course-action-option" onClick={(e) => setSelectedAction("delete")}>DELETE</p>}
                    </div>
                    {/* {console.log("SELECTED TEACHER IN DOM:", selectedTeacher)} */}
                    {/* {console.log("TEACHERS LIST:", teachersList)} */}
                    {
                        selectedAction === "update"
                        ?
                        <div className="course-update-container">
                            {/* <form action="http://localhost:3450/course/update" method="POST"> */}
                            <form>
                                <label className="course-update-label">Course Title</label>
                                <br />
                                <input type="text" placeholder="Please enter the course title" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} className="course-update-input" />
                                <br />

                                <label className="course-update-label">Course Teacher</label>
                                <br />
                                {/* <input type="text" placeholder="Please enter the course teacher" value={selectedTeacher} onChange={(e) => setCourseTeacher(e.target.value)} /> */}
                                {
                                teachersList !== null
                                ?
                                    <select
                                        value={selectedTeacher} 
                                        onChange={e => {
                                            setSelectedTeacher(e.target.value);
                                            setCourseTeacher(e.target.value);
                                        }}
                                        className="course-update-dropdown"
                                    >
                                        {
                                            teachersList.map(teacher => (
                                                <option
                                                    key={teacher.teacherID}
                                                    value={teacher.firstName + " " + teacher.lastName}
                                                >
                                                    {teacher.firstName + " " + teacher.lastName}
                                                </option>
                                            ))
                                        }
                                    </select>
                                : null
                                }
                                <br />

                                <label className="course-update-label">Course Description</label>
                                <br />
                                <textarea 
                                    type="text" 
                                    placeholder="Please enter the course description" 
                                    value={courseDescription} 
                                    onChange={(e) => setCourseDescription(e.target.value)} 
                                    className="course-update-textarea"
                                />
                                <br />

                                <label className="course-update-label">Course Capacity</label>
                                <br />
                                <input type="number" placeholder="Please enter the course capacity" value={courseCapacity} onChange={(e) => setCourseCapacity(e.target.value)} className="course-update-input" />
                                <br />

                                <label className="course-update-label">Course Building</label>
                                <br />
                                <input type="text" placeholder="Please enter the course building" value={courseBuilding} onChange={(e) => setCourseBuilding(e.target.value)} className="course-update-input" />
                                <br />

                                <button type="submit" onClick={handleUpdate} className="course-update-btn">Update Course</button>
                            </form>
                        </div>
                        : selectedAction === "delete"
                        ?
                        <h1>DELETE</h1>
                        :
                        null
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export { Course };

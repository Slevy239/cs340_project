// CORE
import { useState, useEffect } from "react";

// STYLES
import "./styles/Students.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const Students = () => {
    const [students, setStudents] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3450/api/students", { method: "GET" })
        // fetch("/api/students/", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setStudents(data);
            });
    }, []);

    return (
        <div className="students-page-outer-container">
            <div className="students-page-inner-container">
                <Header />
                <div className="students-hero-outer-container">
                    <div className="students-hero-inner-container">
                        <div className="student-text-container">
                            <p className="students-hero-calling">Student Portal<br />Access Simplified.</p>
                            <p className="students-hero-statement">
                                Now students have the ability to quickly and easily find courses 
                                and other university activities that match their personality.
                            </p>
                        </div>
                        <div className="students-hero-add-form">
                            <form>
                                <label>Student</label>
                                <input type="text" placeholder="Student's name" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="students-list-outer-container">
                    <div className="students-list-inner-container">
                        <h2 className="students-list-title">Students</h2>
                        <div className="students-list-collection">
                            {
                                students !== null
                                ?
                                students.map(student => (
                                    <div key={student.studentID} className="student">
                                        <h3 className="student-name">{student.firstName} {student.lastName}</h3>
                                        <p className="student-major">-{student.studentMajor}-</p>
                                    </div>
                                ))
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Students };

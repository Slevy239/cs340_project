// CORE
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import "./styles/Courses.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const Courses = () => {
    const [courses, setCourses] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState("");

    useEffect(() => {
        fetch("http://localhost:3450/get-courses", {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCourses(data);
                setSelectedCourse(data[0].courseTitle);
            });
    }, []);

    const handleCourseSelection = (courseSelectionEvent) => {
        setSelectedCourse(courseSelectionEvent.target.value);
        return 0;
    };

    return (
        <div className="courses-page-outer-container">
            <div className="courses-page-inner-container">
                <Header />
                <div className="courses-hero-outer-container">
                    <div className="courses-hero-inner-container">
                        <div className="hero-text-container">
                            <p className="courses-hero-calling">Sign Up for Your<br /> Next Course</p>
                            <p className="courses-hero-statement">
                                Search courses available at Oregon State University and sign up
                                for the courses you're interested in.
                            </p>
                        </div>
                        <div className="courses-hero-add-form">
                            <form>
                                <label className="course-hero-add-form-title">Courses</label>
                                <select value={selectedCourse} onChange={handleCourseSelection} className="course-hero-add-form-select">
                                    {
                                        courses !== null
                                        ?
                                        courses.map(course => (
                                            <option key={course.courseID} value={course.courseTitle} className="course-hero-select-option">{course.courseTitle}</option>
                                        ))
                                        : null
                                    }
                                </select>
                            </form>
                            <Link to={`/course/${selectedCourse}`} state={ { "courseTitle": selectedCourse } }>
                                    <button className="course-search-btn">Lookup Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="available-courses-outer-container">
                    <h1 className="available-courses-title">Courses</h1>
                    <div className="available-courses-inner-container">
                        {
                            courses !== null
                            ?
                            courses.map(course => (
                                <Link to={`/course/${course.courseTitle}`}  state={ { "courseTitle": course.courseTitle } } className="available-course">
                                    <div key={course.courseID}>
                                        <div className="available-course-header">
                                            <p className="available-course-title">{course.courseTitle}</p>
                                            <p className="available-course-department">-{course.department}-</p>
                                        </div>
                                        <div className="course-description-container">
                                            <p className="course-description">{course.courseDescription}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Courses };

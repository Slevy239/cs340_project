// CORE
import { useState, useEffect } from "react";

// STYLES
import "./styles/Teachers.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const Teachers = () => {
    const [teachers, setTeachers] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState("");

    useEffect(() => {
        fetch("http://localhost:3450/api/get-teachers", {
        // fetch("/api/get-teachers/", {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTeachers([...data]);
            });
    }, []);

    const handleSelectChange = (selectEvent) => {
        setSelectedTeacher(selectEvent.target.value);
        return 0;
    };

    return (
        <div className="teachers-page-outer-container">
            <div className="teachers-page-inner-container">
                <Header />
                <div className="teachers-hero-outer-container">
                    <div className="teachers-hero-inner-container">
                        <div className="hero-text-container">
                            <p className="teachers-hero-calling">Lookup your<br /> favorite professors.</p>
                            <p className="teachers-hero-statement">
                                Great professors make a greate university. Oregonizer let's 
                                you lookup professors across all departments as well as specific
                                information about each professor.
                            </p>
                        </div>
                        <div className="teachers-hero-add-form">
                            <form className="teachers-hero-form-container">
                                <label>Professor</label>
                                <select value={selectedTeacher} onChange={handleSelectChange} className="teachers-select-element">
                                    {
                                        teachers !== null
                                        ?
                                            teachers.map(teacher => (
                                                    <option 
                                                        key={teacher.teacherID} 
                                                        value={teacher.firstName + teacher.lastName}
                                                    >
                                                        {teacher.firstName} {teacher.lastName}
                                                    </option>
                                                )
                                            )
                                        : null
                                    }
                                </select>
                                {/* <input type="text" placeholder="Professor's name" className="teachers-hero-form-input" /> */}

                                <button type="submit" className="teachers-hero-form-submit-btn">Find Professors</button>
                            </form>
                        </div>
                    </div>
                    <div className="teachers-select-all-outer-container">
                        <div className="teachers-select-all-inner-container">
                        <h2 className="teachers-select-all-title">Professors</h2>
                        {
                            teachers !== null
                            ?
                                <div className="teachers-display-all">
                                    {teachers.map(teacher => {
                                        return (
                                            <div className="teacher-display-instance" key={teacher.teacherID}>
                                                <p className="teacher-name">{teacher.firstName} {teacher.lastName}</p>
                                                <p className="teacher-department">{teacher.department}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            :
                            null
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Teachers };

// STYLES
import "./styles/Students.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const Students = () => {
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
            </div>
        </div>
    );
};

export { Students };

// STYLES
import "./styles/Courses.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const Courses = () => {
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
                                <label>Professor</label>
                                <input type="text" placeholder="Professor's name" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Courses };

// STYLES
import "./styles/BuildingsOnCampus.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const BuildingsOnCampus = () => {
    return (
        <div className="buildings-on-campus-page-outer-container">
            <div className="buildings-on-campus-page-inner-container">
                <Header />
                <div className="buildings-on-campus-hero-outer-container">
                    <div className="buildings-on-campus-hero-inner-container">
                        <div className="hero-text-container">
                            <p className="buildings-on-campus-hero-calling">Find Your Way<br />Around Campus</p>
                            <p className="buildings-on-campus-hero-statement">
                                Our platform guides you around Oregon State University's 
                                campus and helps you orient yourself with the different
                                buildings and common areas.
                            </p>
                        </div>
                        <div className="buildings-on-campus-hero-add-form">
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

export { BuildingsOnCampus };

// STYLES
import "./styles/Teachers.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const Teachers = () => {
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
                                <label>Professor</label><br />
                                <input type="text" placeholder="Professor's name" className="teachers-hero-form-input" />

                                <label>Professor</label><br />
                                <input type="text" placeholder="Professor's name" className="teachers-hero-form-input" />

                                <label>Professor</label><br />
                                <input type="text" placeholder="Professor's name" className="teachers-hero-form-input" />

                                <button type="submit" className="teachers-hero-form-submit-btn">Find Professors</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Teachers };

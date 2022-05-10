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

export { Teachers };

// IMAGES / ICONS / ILLUSTRATIONS
import homePageIllustration from "../../images/illustrations/graduating.svg";

// STYLES
import "./styles/Home.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const Home = () => {
    return (
        <div className="home-page-outer-container">
            <div className="home-page-inner-container">
                <Header />
                <div className="home-hero-outer-container">
                    <div className="home-hero-inner-container">
                        <p className="home-hero-calling">Everything OSU.<br />All in One Place.</p>
                        <p className="home-hero-statement">
                            Lookup teachers, students, courses, and buildings on campus with an
                            all in one tool that simplifies everything you've ever wanted from
                            Oregon State University.
                        </p>
                    </div>
                    <img src={homePageIllustration} className="home-page-hero-illustration" />
                </div>
            </div>
        </div>
    );
};

export { Home };

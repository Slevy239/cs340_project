// LOGOS
import osuLogo from "../../images/logos/osu_logo.png";

// CORE
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// STYLES
import "./styles/Header.scss";


// PAGES
import { Home } from "../../pages/Home/Home";
import { Teachers } from "../../pages/Teachers/Teachers";

const Header = () => {
    return (
        // <BrowserRouter>
        <div className="header-outer-container">
            <div className="header-inner-container">
                <h1>
                    <Link to="/" className="header-logo">Oregonizer</Link>
                </h1>
                <nav className="navigation">
                    <ul className="navigation-list">
                        <Link to="/teachers" className="navigation-list-item">Teachers</Link>
                        <Link to={"/students"} className="navigation-list-item">Students</Link>
                        <Link to={"/buildings-on-campus"} className="navigation-list-item">Buildings on Campus</Link>
                        <Link to={"/courses"} className="navigation-list-item">Courses</Link>
                    </ul>
                </nav>
            </div>
        </div>
            /* <Routes>
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/students" element={<Home />} />
                <Route path="/buildings-on-campus" element={<Home />} />
                <Route path="/courses" element={<Home />} />
            </Routes>
        </BrowserRouter> */
    );
};

export { Header };

// CORE
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import { Header } from "./components/Header/Header";

// PAGES
import { Home } from './pages/Home/Home';
import { Teachers } from "./pages/Teachers/Teachers";
import { Students } from "./pages/Students/Students";
import { Courses } from "./pages/Courses/Courses";
import { BuildingsOnCampus } from "./pages/BuildingsOnCampus/BuildingsOnCampus";

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="hero-section-backdrop-item-1"></div>
            <div className="hero-section-backdrop-item-2"></div>
            {/* <div className="hero-section-backdrop-item-3"></div> */}
            {/* <Header /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/buildings-on-campus" element={<BuildingsOnCampus />} />
                    <Route path="/courses" element={<Courses />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export { App };

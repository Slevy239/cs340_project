// CORE
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import { Header } from "./components/Header/Header";

// PAGES
import { Home } from './pages/Home/Home';
import { Teachers } from "./pages/Teachers/Teachers";

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
                    {/* <Route path="/students" element={<Home />} /> */}
                    {/* <Route path="/buildings-on-campus" element={<Home />} /> */}
                    {/* <Route path="/courses" element={<Home />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export { App };

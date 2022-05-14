// CORE
import { useState, useEffect } from "react";

// STYLES
import "./styles/BuildingsOnCampus.scss";

// COMPONENTS
import { Header } from "../../components/Header/Header";

const BuildingsOnCampus = () => {
    const [buildingsOnCampus, setBuildingsOnCampus] = useState(null);

    useEffect(() => {
        // fetch("http://localhost:3450/buildings-on-campus", { method: "GET" })
        fetch("/buildings-on-campus/", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log("BUILDINGS ON CAMPUS:\n",data);
                setBuildingsOnCampus(data);
            });
    }, []);

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
                <div className="buildings-on-campus-outer-container">
                    <h1 className="buildings-on-campus-collection-title">Buildings on Campus</h1>
                    <div className="buildings-on-campus-inner-container">
                        {
                            buildingsOnCampus !== null
                            ?
                            <div className="buildings-on-campus-collection-container">
                                {
                                    buildingsOnCampus.map(buildingOnCampus => (
                                        <div key={buildingOnCampus.buildingID} className="building-on-campus">
                                            <h2 className="building-on-campus-name">{buildingOnCampus.buildingName}</h2>
                                            <p className="building-on-campus-capacity">Building Capacity: {buildingOnCampus.buildingCapacity}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export { BuildingsOnCampus };

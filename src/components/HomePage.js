import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
    return(
        <>
        <div className="home">
            <div>
                <img src="./Assets/logo.svg"/>
                <h3>fırsatı kaçırm</h3>
                <p>KOD ACIKTIRIR <br/> PİZZA, DOYURUR</p>
                <Link to="/pizza" id="order-pizza">ACIKTIM</Link>
            </div>
        </div>
        </>
    )
}

export default HomePage;
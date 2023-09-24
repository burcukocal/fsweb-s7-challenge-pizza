import React from "react"
import "../style/HomePage.css"
import logo from "../Assets/logo.svg"
import { Link } from 'react-router-dom';


const HomePageHeader = () => {

    return (
        <div className="home-hero">
            <div className="home-page-header flex justify-center text-center p-2.5">
                <Link to="/">
                    <img alt="Teknolojik Yemekler" src={logo} className="pt-5" />
                </Link>
            </div>
            <div className="home-title">
                <p>fırsatı kaçırma</p>
                <h2>KOD ACIKTIRIR</h2>
                <h2>PIZZA, DOYURUR</h2>
                <Link to="/pizza">
                    <button>ACIKTIM</button>
                </Link>
            </div>
        </div>

    )
}

export default HomePageHeader
import React from "react"
import "../style/HomePage.css";
import { foodItems } from "../data/FoodIcons";

const HomeHeader = () => {
    return (
        <div className="header-bar">
            {foodItems.map((item) => (
                <div className="header-icons">
                    <img alt="food item" src={item.img} />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default HomeHeader;
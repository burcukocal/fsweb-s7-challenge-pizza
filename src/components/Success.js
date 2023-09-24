import React from "react";
import "./Success.css";

const Success = ({order}) => {


    return(
        <div className="success">
            <div className="confirm">
                <h3>lezzetin yolda</h3>
                <h2>SİPARİŞ ALINDI</h2>
                <hr/>
            </div>
            <div className="confirm-pizza">
                <h3>{order.name}</h3>

            </div>

            
        </div>
    )

}

export default Success;
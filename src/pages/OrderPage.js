import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import Footer from "../components/Footer";
import OrderForm from "../components/OrderForm";
const OrderPage = () => {
    return (
        <>
            <div className="home-page-header flex justify-center text-center p-2.5">
                <Link to="/">
                    <img  src={logo} className=" " />
                </Link>
            </div>
            <OrderForm />
            <Footer />
        </>
    )

}
export default OrderPage;
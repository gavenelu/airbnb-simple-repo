import React from "react"
import Navlogo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={Navlogo} alt="" />
        </nav>
    )
}
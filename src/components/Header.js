import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className="main-header">
        <div className="logo">
            <img style={{"width" : "20%"}} src={LOGO_URL} />
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;
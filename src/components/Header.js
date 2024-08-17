import React, {useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    
    const [btnName,setBtnName] = useState("Login");


    return (

        <div className="main-header">
            <div className="logo">
                <img style={{"width" : "20%"}} src={LOGO_URL} />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button onClick={
                        () => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    );

};

export default Header;
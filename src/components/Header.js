import React, {useState} from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {
    
    const [btnName,setBtnName] = useState("Login");


    return (

        <div className="main-header">
            <div className="logo">
                <img style={{"width" : "20%"}} src={LOGO_URL} />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
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
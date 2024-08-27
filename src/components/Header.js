import React, {useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    
    const [btnName,setBtnName] = useState("Login");


    return (

        <div class="flex justify-between">
            <div className="logo">
                <img style={{"width" : "20%"}} src={LOGO_URL} />
            </div>
            <div class="menu">
                <ul class="flex p-4 m-4">
                    <li class="m-2 p-2"><Link to="/">Home</Link></li>
                    <li class="m-2 p-2"><Link to="/about">About</Link></li>
                    <li class="m-2 p-2"><Link to="/contact">Contact</Link></li>
                    <button class="m-2 p-2 text-white rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500" 
                    onClick={
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
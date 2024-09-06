import React, {useState,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    const [btnName,setBtnName] = useState("Login");
   
    const {loggedInUser} = useContext(UserContext);
    
    //Subsribing to store using Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (

        <div className="flex justify-between">
            <div className="logo">
                <img style={{"width" : "20%"}} src={LOGO_URL} />
            </div>
            <div className="menu">
                <ul className="flex p-4 m-4">
                    <li className="m-2 p-2"><Link to="/">Home</Link></li>
                    <li className="m-2 p-2"><Link to="/about">About</Link></li>
                    <li className="m-2 p-2"><Link to="/contact">Contact</Link></li>
                    <button className="m-2 p-2 text-white rounded-full bg-bubble-gum from-metal to-purple hover:from-tahiti hover:to-metal" 
                    onClick={
                        () => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }
                    }>{loggedInUser} {btnName}</button>
                    <li> Cart - {cartItems.length} </li>
                </ul>
            </div>
        </div>
    );

};

export default Header;
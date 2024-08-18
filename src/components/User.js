import React from "react";

const User = ({name}) => {
    return (
        <div className="user-card">
             <h2>Name : {name} </h2>
             <h3>Location : Kalyan</h3>
             <h3>Contact : sablerohan61@gmail.com</h3>
        </div>
    )
}

export default User;
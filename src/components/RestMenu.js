import React, {useEffect} from "react";

export const RestMenu = () => {

    useEffect(()=>{
        console.log('Rest Menu with useEffect')
    },[]);

    return (
        <div className="container-restMenu">
            <h1>This is View Page</h1>
            <h3>Restaurant Name: ABC</h3>
            This is Data
        </div>
    );
}
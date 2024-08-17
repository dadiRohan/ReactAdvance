import React from "react";
import { useRouteError } from "react-router-dom";
export const Error = () => {

    // console.log(useRouteError);

    return (
        <div className="Error-header">
            <h1>Oops!!!</h1>
            <h4>404 Page Not Fount</h4>
        </div>
    )
}
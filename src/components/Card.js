import React from "react";

const cardStyle = {
    "backgroundColor": "rgb(23, 168, 100)",
};

const Card = (props) => {
    console.log(props);
    const {restData} = props;
    const {name, cusine, rating, photo} = restData?.data;
    // console.log(restData);
    return (
        <div className="card" style={cardStyle}>
            <img src={photo} style={{"width" : "100%","height" : "40%", "alignSelf" : "center","display":"block"}}/>
            <h4>{name}</h4>
            <p><b>Cusine:</b> {cusine}</p>
            <p><b>Rating:</b> {rating}</p>
        </div>
    )
};

export default Card;
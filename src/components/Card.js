import React from "react";

const cardStyle = {
    "backgroundColor": "rgb(23, 168, 100)",
};

const Card = (props) => {
    // console.log(props.restData.restaurantId);
    const {restData} = props;
    const {text, category, type, photo} = restData;

    console.log({restData});
    return (
        <div className="card" style={cardStyle}>
            {/* <img src={photo} style={{"width" : "100%","height" : "40%", "alignSelf" : "center","display":"block"}}/> */}
            <img src="https://cdn.vectorstock.com/i/500p/22/07/burger-icon-isolated-flat-cartoon-sandwich-vector-15262207.jpg"
            style={{"width" : "100%","height" : "40%", "alignSelf" : "center","border":"2px solid #17a864 "}}/>
            <h4>{text}</h4>
            <p><b>Category:</b> {category}</p>
            <p><b>Type:</b> {type}</p>
        </div>
    )
};

export default Card;
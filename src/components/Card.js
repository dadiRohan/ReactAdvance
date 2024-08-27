import React from "react";


const Card = (props) => {
    const {restData} = props;
    const {text, category, type, photo} = restData;

    return (
        <div class="inner-card" >
            <img src="https://cdn.vectorstock.com/i/500p/22/07/burger-icon-isolated-flat-cartoon-sandwich-vector-15262207.jpg"
            style={{"width" : "20%","height" : "40%", "alignSelf" : "center","border":"2px solid #17a864 "}}/>
            <h4>{text}</h4>
            <p><b>Category:</b> {category}</p>
            <p><b>Type:</b> {type}</p>
        </div>
    )
};

export default Card;
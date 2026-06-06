import React from "react";


const Card = (props) => {
    const { restData } = props;
    const { text, category, type , Image } = restData;

    return (
        <div className="inner-card" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
            <img 
                src={Image}
                style={{ 
                    "width": "20%", 
                    "height": "20%", 
                    "alignSelf": "center", 
                    "border": "2px inset #17a864" 
                }}
                alt="food"
            />
            {/* flexGrow pushes the title next to the image, width 100% on p tags forces them to the next line without any wrapper divs */}
            <h1 style={{ "fontWeight": "900", "fontSize": "2.2rem", "margin": "0", flexGrow: 1 }}>{text}</h1>
            
            <p style={{ width: "100%", margin: "4px 0 0 0" }}><i style={{"fontWeight":"bold"}}>Category:</i> {category}</p>
            <p style={{ width: "100%", margin: "4px 0 0 0" }}><i style={{"fontWeight":"bold"}}>Type:</i> {type}</p>
        </div>
    );
};

export const withPromtedLabel = (Card) => {
    return (props) => {
        return (
            <div style={{ position: "relative", display: "inline-block" }}>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg" style={{ zIndex: 10 }}>
                    Promoted
                </label>
                <Card {...props} />
            </div>
        );
    };
};

export default Card;

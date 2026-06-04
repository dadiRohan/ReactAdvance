import React, { useMemo } from "react";

const FImages = [
  'https://cdn.vectorstock.com/i/750p/85/10/pepperoni-pizza-vector-3268510.avif',
  'https://cdn.vectorstock.com/i/500p/15/70/asian-food-platter-top-view-vector-58591570.avif',
  'https://cdn.vectorstock.com/i/750p/00/76/tasty-burger-emblem-label-vector-11370076.avif',
  'https://cdn.vectorstock.com/i/750p/36/36/english-breakfast-with-egg-and-sausages-tomatoes-vector-47863636.avif',
  'https://cdn.vectorstock.com/i/750p/00/15/european-food-menu-cuisine-europe-meals-vector-29320015.avif',
  'https://cdn.vectorstock.com/i/750p/09/61/asian-food-circle-diverse-cuisine-vector-50680961.avif',
  'https://cdn.vectorstock.com/i/750p/84/56/american-breakfast-top-view-isolated-vector-13518456.avif'
];

const Card = (props) => {
    const { restData } = props;
    const { text, category, type } = restData;

    // Pick a random image once per component instance
    const randomImage = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * FImages.length);
        return FImages[randomIndex];
    }, []);

    return (
        <div className="inner-card">
            <img 
                src={randomImage}
                style={{ 
                    "width": "20%", 
                    "height": "40%", 
                    "alignSelf": "center", 
                    "border": "2px solid #17a864" 
                }}
                alt="food"
            />
            <h4>{text}</h4>
            <p><b>Category:</b> {category}</p>
            <p><b>Type:</b> {type}</p>
        </div>
    );
};

export const withPromtedLabel = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <Card {...props} />
            </div>
        );
    };
};

export default Card;
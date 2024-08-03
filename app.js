import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => (
    <div className="main-header">
        <div className="logo">
            <img src="https://cdn.vectorstock.com/i/500p/22/07/burger-icon-isolated-flat-cartoon-sandwich-vector-15262207.jpg" />
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const cartStyle = {
    "border":"1px dotted green",
};


const Card = (props) => {
    console.log(props)
    return (
        <div className="card" style={cartStyle}>
            <img src="https://cdn.vectorstock.com/i/500p/22/07/burger-icon-isolated-flat-cartoon-sandwich-vector-15262207.jpg"/>
            <p>North, South Indian, Chinese, Pizza</p>
            <p>On site / Taking Order</p>
        </div>
    )
};

const Body = () => {
    return (
        <div className="main-body">
            <div className="search-box">
                <input type="text" name="search" placeholder="Search here..."/>
            </div>
            <Card resName="Houesfull" cusine="cocktail, Snacks, Pizza" />
            <Card resName="welcome2" cusine="continental, Chinese, Seafood" />
        </div>
    )
};

// React Component Composition //
const Reactcomponent = () => (
    <div id="container">
        <Header/>
        <h2 className="heading">This is Order Platform</h2>
        <Body/>
    </div>
);
console.log(Reactcomponent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Reactcomponent />);
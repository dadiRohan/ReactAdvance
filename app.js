import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => (
    <div className="main-header">
        <div className="logo">
            <img style={{"width" : "20%"}} src="https://cdn.dribbble.com/users/7004524/screenshots/15197928/media/40944f27c2dcfaf14038f387b4e88c2d.jpg?resize=768x576&vertical=center" />
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
    "width" : "10%",
    "margin" : "0 2px",
    "padding" : "2px"
};

//Sample JSON
const restList = [
    {
        type : "restaurant",
        data : {
            type: "F",
            id : 323122,
            name : "Burger King",
            uuid : "13131311212",
            city : "kalyan",
            cusine : "Burger, Rolls, French fries",
            rating : "4.5 stars",
            photo : "https://cdn.vectorstock.com/i/500p/22/07/burger-icon-isolated-flat-cartoon-sandwich-vector-15262207.jpg"
        }
    },
    {
        type : "claud kitchen",
        data : {
            type: "F",
            id : 323124,
            name : "Annas Kitchen",
            uuid : "13131311212",
            city : "Dombivli",
            cusine : "Thali, North & South indian, Soft Drinks and bevarage",
            rating : "3.2 stars",
            photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZfxNY8r2-a60xbloK3hQwgqV9ezYFqJlzg&s"
        }
    },
    {
        type : "Resto Bar",
        data : {
            type: "F",
            id : 323126,
            name : "Xamrin Resto Bar",
            uuid : "13131311212",
            city : "Manpada",
            cusine : "Indian Cusines, Chinese, Mexican, Italian, Bear and Cocktails",
            rating : "4.9 stars",
            photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl0nGCPWmVgaoLBHNR3lxTHy0m9OqaFwlGg&s"
        }
    }
] 
//Sample JSON

const Card = (props) => {
    console.log(props);
    const {restData} = props;
    const {name, cusine, rating, photo} = restData?.data;
    console.log(restData);
    return (
        <div className="card" style={cartStyle}>
            <img src={photo} style={{"maxWidth" : "60%","alignSelf" : "center","display":"block"}}/>
            <h4>{name}</h4>
            <p><b>Cusine:</b> {cusine}</p>
            <p><b>Rating:</b> {rating}</p>
        </div>
    )
};


const Body = () => {
    return (
        <div className="main-body">
            <div className="search-box">
                <input type="text" name="search" placeholder="Search here..."/>
            </div>
            {/* <Card resName="Houesfull" cusine="cocktail, Snacks, Pizza" />
            <Card resName="welcome2" cusine="continental, Chinese, Seafood" /> */}
            {/* <Card restData = {restList[2]} /> */}
            
            <div style={{"display" : "flex"}}>
                {restList.map((restarant) => (
                    // console.log(restarant);
                    <Card restData = {restarant}/>
                ))}
            </div>

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
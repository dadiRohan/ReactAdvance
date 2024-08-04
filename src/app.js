import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



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
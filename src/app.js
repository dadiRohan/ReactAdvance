import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {NormalState,UseStateVar,NormalEffect,Dashed} from './components/Hook';
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import  About  from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestMenu } from "./components/RestMenu";
// React Component Composition //
const Reactcomponent = () => (
    <div id="container">
        <Header/>

        <Outlet/> 
        
        <Dashed/>
    </div>
);

const RouterList = createBrowserRouter([
    {
        "path" : "/",
        "element" : <Reactcomponent/>,
        children: [
            {
                "path" : "/",
                "element" : <Body/>
            },
            {
                "path" : "/about",
                "element" : <About/>
            },
            {
                "path" : "/contact",
                "element" : <Contact/>
            },
            {
                "path" : "/restaurant/:id",
                "element" : <RestMenu/>
            }
        ],
        "errorElement" : <Error/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Reactcomponent />);
root.render(<RouterProvider router={RouterList}/>);
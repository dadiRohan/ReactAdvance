import React,{lazy,Suspense,useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {NormalState,UseStateVar,NormalEffect,Dashed} from './components/Hook';
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
// import  About  from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestMenu } from "./components/RestMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// React Component Composition //
const About = lazy(()=>import("./components/About"));

const AboutData = () => {
    return (
        <Suspense fallback={<p><i>Loading...</i></p>}>
            <About/>
        </Suspense>
    );
};

const AppLayout = () => {
    const [userName,setUserName] = useState(null);

    //Authentication
    useEffect(()=>{
        //Call API and get data
        const data = {
            name : 'Rohan-Sable'
        };
        setUserName(data.name);
    },[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                <Header/>
                <Outlet/>
                <Dashed/>
            </UserContext.Provider>
        </Provider>
    )

}


const RouterList = createBrowserRouter([
    {
        "path" : "/",
        "element" : <AppLayout/>,
        children: [
            {
                "path" : "/",
                "element" : <Body/>
            },
            {
                "path" : "/about",
                "element" : <AboutData/>
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
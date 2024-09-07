import React, {useEffect, useState,useContext} from "react";
import Card,{withPromtedLabel} from "./Card";
import {restList as restListJS,RestAdvanceList } from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {useOnlineStatus}  from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [restList,setList] = useState(0); 
    const [filterSearch,setFilterSearch] = useState([]);

    const [searchText,setSearchText] = useState("");
    const {loggedInUser,setUserName} = useContext(UserContext);
    let useOnlineStatusVar = useOnlineStatus();

    const RestaurantCardPromoted = withPromtedLabel(Card);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.120842&lng=72.9250169&str=Mumbai");
            const json = await data.json();
            const masterJson = json?.data?.suggestions;

            setList(masterJson)
            setFilterSearch(masterJson)
        } catch (error) {
            setList(RestAdvanceList)
            setFilterSearch(RestAdvanceList)
        }    
    };

    useEffect(() => {
        
        const timer = setTimeout(()=>{
            fetchData();    

        },1000);
        return () => clearTimeout(timer);

    },[]);  


    if(restList === 0){
        return <Shimmer />
    }

    return (
        <div className="main-body">
            
            <div className="search-box">
                <span className="font-thin">Online Status:{(useOnlineStatusVar === true) ? '🟢' : '🔴'}</span>
                <b>LogIn User :</b>
                <input type="text" 
                    placeholder="Enter Name"
                    className="m-2 p-1 text-center text-white rounded-full bg-metal"
                    value={loggedInUser}
                    onChange={(e)=>{
                        setUserName(e.target.value);
                    }}
                />
                
                <input type="text" className="w-96 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="search" placeholder="Search Restaurant Name" value={searchText} onChange={
                    (e) => {
                        setSearchText(e.target.value)
                    }
                }/>
                <button className="m-2 p-2 text-white rounded-full bg-purple"
                onClick={
                    () => {
                        const filterSearchFinal = filterSearch.filter((listData) => ( 
                            searchText === "" ? 
                            fetchData() : 
                            listData?.text.toLowerCase().includes(searchText.toLowerCase()) 
                        ))
                        
                        setFilterSearch(filterSearchFinal);
                    }
                }>Search</button>
                <button className="m-2 p-2 text-white rounded-full bg-metal"
                onClick={() => {
                    setSearchText("");
                    fetchData();   
                }}>Clear</button>
                
            </div>
            

            <div className="card flex flex-wrap">
            
                {

                    filterSearch.map((restarant) => (
                        <Link to={"/restaurant/"+JSON.parse(restarant.metadata)?.data?.primaryRestaurantId} >
                            {
                                JSON.parse(restarant.metadata)?.data?.enabled_flag === 0 
                                ? 
                                (<RestaurantCardPromoted key={JSON.parse(restarant.metadata)?.data?.primaryRestaurantId} restData = {restarant} />) //Higher Order Component
                                :
                                (<Card key={JSON.parse(restarant.metadata)?.data?.primaryRestaurantId} restData = {restarant} />)

                            }
                            
                        </Link>
                    ))
            
                }

            </div>

        </div>
    )
};

export default Body;
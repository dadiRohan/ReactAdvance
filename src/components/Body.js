import React, {useEffect, useState} from "react";
import Card from "./Card";
import {restList as restListJS,RestAdvanceList } from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {useOnlineStatus}  from "../utils/useOnlineStatus";

const Body = () => {

    const [restList,setList] = useState(0); 
    const [filterSearch,setFilterSearch] = useState([]);

    const [searchText,setSearchText] = useState("");
    let useOnlineStatusVar = useOnlineStatus();

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.120842&lng=72.9250169&str=Thane");
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
                <span>Online Status :{(useOnlineStatusVar === true) ? '🟢' : '🔴'}</span>
                <input type="text" className="w-100 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="search" placeholder="Search here" value={searchText} onChange={
                    (e) => {
                        setSearchText(e.target.value)
                    }
                }/>
                <button className="bg-green-700 hover:bg-blue-700 text-orange font-bold py-2 px-4 rounded"
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
                <button className="m-2 bg-gray-200 hover:bg-red-700 text-orange font-bold py-2 px-4 rounded"
                onClick={() => {
                    setSearchText("");
                    fetchData();   
                }}>Clear</button>
            </div>
            

            <div className="card flex flex-wrap">
            
                {

                    filterSearch.map((restarant) => (
                        
                        <Link to={"/restaurant/"+JSON.parse(restarant.metadata)?.data?.primaryRestaurantId} >
                            <Card key={JSON.parse(restarant.metadata)?.data?.primaryRestaurantId} restData = {restarant}/>
                        </Link>
                    ))
            
                }

            </div>

        </div>
    )
};

export default Body;
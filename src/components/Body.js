import React, {useEffect, useState} from "react";
import Card from "./Card";
import {restList as restListJS,RestAdvanceList } from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restList,setList] = useState(0); 
    const [filterrestList,setFilterrestList] = useState([]);

    const [searchText,setSearchText] = useState("");
  
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.120842&lng=72.9250169&str=Thane");

            const json = await data.json();

            setList(json?.data?.suggestions)
            setFilterrestList(json?.data?.suggestions)
        } catch (error) {
            // console.log(error)
            
            setList(RestAdvanceList)
            setFilterrestList(RestAdvanceList)
        }    
    };

        

    useEffect(() => {
        
        const timer = setTimeout(()=>{
            // setList(RestAdvanceList);

            fetchData();    

            console.log('SetTimeout Timer');
        },1000);
        return () => clearTimeout(timer);

    },[]);  


    if(restList === 0){
        return <Shimmer />
    }

    return (
        <div className="main-body">
            
            <button className="filter-btn" onClick={()=>{
                
                const filterRestList = restList.filter(
                    (res) => res?.data?.rate > 4
                );
                setList(filterRestList);
                
            }}>Top Rated Restaurants</button>

            <div className="search-box">
                <input type="text" name="search" placeholder="Search here..." value={searchText} 
                    onChange={
                    (e) => {
                        setSearchText(e.target.value);
                    }}
                />
                
                <button onClick={
                    () => {
                        console.log('Search Clicked'+searchText);
                        const filterSerachRestList = restList.filter((res) => res?.text.toLowerCase().includes(searchText.toLowerCase()));
                        setList(filterSerachRestList);
                        setFilterrestList(filterSerachRestList);
                    }
                }>Search</button>
            </div>
            
            <div className="card-container" style={{"display" : "flex"}}>
            
                {
                    
                    filterrestList.map((restarant) => (
                        // console.log(restarant);
                        <Card key={restarant.cloudinaryId} restData = {restarant}/>
                    ))
            
                }

            </div>

        </div>
    )
};

export default Body;
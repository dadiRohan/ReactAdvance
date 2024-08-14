import React, {useEffect, useState} from "react";
import Card from "./Card";
import {restList as restListJS,RestAdvanceList } from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restList,setList] = useState(0); 
  
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.120842&lng=72.9250169&str=Thane");

            const json = await data.json();

            setList(json?.data?.suggestions)
            
        } catch (error) {
            // console.log(error)
            const json = RestAdvanceList;
            console.log('Data:');
            console.log(json);
            
            setList(json)
        }    
    };

        

    useEffect(() => {
        
        const timer = setTimeout(()=>{
            // setList(RestAdvanceList);

            fetchData();    

            console.log('SetTimeout Timer');
        },3000);
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
                <input type="text" name="search" placeholder="Search here..."/>
            </div>
            
            <div className="card-container" style={{"display" : "flex"}}>
            
                {
                    
                    restList.map((restarant) => (
                        // console.log(restarant);
                        <Card key={restarant.cloudinaryId} restData = {restarant}/>
                    ))
            
                }

            </div>

        </div>
    )
};

export default Body;
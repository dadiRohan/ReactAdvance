import React, {useEffect, useState} from "react";
import Card from "./Card";
import {restList as restListJS } from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restList,setList] = useState(restListJS); 

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.120842&lng=72.9250169&str=kalyan",{mode: 'no-cors'}
        );

        const json = await data.json();

        console.log(json);

        setList(json?.data?.suggestions)

    };

    if(restList === 0){
        return <Shimmer />
    }

    return (
        <div className="main-body">
            
            <button className="filter-btn" onClick={()=>{
                //console.log('Filter button clicked');
                const filterRestList = restList.filter(
                    (res) => res.data.rate > 4
                );
                setList(filterRestList);
                //console.log(filterRestList);
            }}>Top Rated Restaurants</button>

            <div className="search-box">
                <input type="text" name="search" placeholder="Search here..."/>
            </div>
            
            <div style={{"display" : "flex"}}>

                {
                    restList.map((restarant) => (
                        // console.log(restarant);
                        <Card key={restarant.data.id} restData = {restarant}/>
                    ))
                }

            </div>

        </div>
    )
};

export default Body;
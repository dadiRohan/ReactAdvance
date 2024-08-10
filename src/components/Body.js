import React, {useState} from "react";
import Card from "./Card";
import {restList as restListJS } from "../utils/mockdata";

const Body = () => {

    const [restList,setList] = useState(restListJS); 

    return (
        <div className="main-body">
            
            <button className="filter-btn" onClick={()=>{
                console.log('Filter button clicked');
                const filterRestList = restList.filter(
                    (res) => res.data.rate > 4
                );
                setList(filterRestList);
                console.log(filterRestList);
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
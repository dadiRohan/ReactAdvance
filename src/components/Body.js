import React from "react";
import Card from "./Card";
import {restList} from "../utils/mockdata";


const Body = () => {
    return (
        <div className="main-body">
            
            <button className="filter-btn" onClick={()=>{
                console.log('Filter button clicked');
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
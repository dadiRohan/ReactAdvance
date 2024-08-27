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
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/suggest?lat=19.120842&lng=72.9250169&str=Kalyan");
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
            
            <div>Online Status :{(useOnlineStatusVar === true) ? '🟢' : '🔴'}</div>
            <div className="search-box">
                <input type="text" name="search" placeholder="Search here" value={searchText} onChange={
                    (e) => {
                        setSearchText(e.target.value)
                    }
                }/>
                <button onClick={
                    () => {
                        const filterSearchFinal = filterSearch.filter((listData) => ( 
                            searchText === "" ? 
                            fetchData() : 
                            listData?.text.toLowerCase().includes(searchText.toLowerCase()) 
                        ))
                        
                        setFilterSearch(filterSearchFinal);
                    }
                }>Search</button>
                <button onClick={() => {
                    setSearchText("");
                    fetchData();   
                }}>Clear</button>
            </div>
            

            <div className="card-container" style={{"display" : "flex"}}>
            
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
import React, {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export const RestMenu = () => {

    const [restview,setRestview] = useState(null);

    const {id} = useParams();


    const fetchviewData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2403305&lng=73.1305395&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestview(json.data);
    }

    useEffect(()=>{
        fetchviewData();
    },[]);

    if(restview === null) return <Shimmer/>;
    
    const { name, costForTwoMessage, cuisines } = restview?.cards[2]?.card?.card?.info;

    return   (
        <div className="container-restMenu">
            <h1>This is View Page</h1>
            <h3>Restaurant Name: {name}</h3>
            <h4>Cusines : {cuisines.join(', ')}</h4>
            <h4>Price : {costForTwoMessage}</h4>
        </div>
    )
}
import React, {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestMenuData } from "../utils/useRestMenuData";
export const RestMenu = () => {
    const {id} = useParams();

    const restview = useRestMenuData(id);

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
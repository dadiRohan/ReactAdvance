import React, {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestMenuData } from "../utils/useRestMenuData";
import { viewRestoData } from "../utils/mockdata";
import MennuList from "./MennuList";
export const RestMenu = () => {

    const [menuData,setMenuData] = useState([]);

    useEffect(()=>{
        setMenuData(viewRestoData);    
    },[]);

    const {id} = useParams();

    const restview = useRestMenuData(id);

    if(restview === null) return <Shimmer/>;
    
    const { name, costForTwoMessage, cuisines } = restview?.cards[2]?.card?.card?.info;

    return   (
        <div className="container-restMenu">
            <div className="text-center border-r-bermuda w-auto h-auto bg-tahiti flex flex-col px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md overflow-y-auto">
                <span className="text-3xl  text-white p-2">{name}</span>
                <hr/>
                <span className="text-sm">Cusines : {cuisines.join(', ')}</span>
                <span className="text-sm">Price : {costForTwoMessage}</span>
            </div>

            <div className="flex flex-col px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md overflow-y-auto">
                {
                    menuData.map((data)=>(
                        <MennuList data={data}/>
                    ))
                }
            </div>
        </div>
    )
}
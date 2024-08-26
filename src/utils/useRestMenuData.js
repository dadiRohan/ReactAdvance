import React, { useState,useEffect } from "react";

export const useRestMenuData = (restId) => {

    const [restview,setRestview] = useState(null);

    const fetchviewData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2403305&lng=73.1305395&restaurantId="+restId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestview(json.data);
    };

    useEffect(()=>{
        fetchviewData();
    },[]);

    return restview;

};
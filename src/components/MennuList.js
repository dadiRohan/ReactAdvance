import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Cart from "./Cart";

const MennuList = (props) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));    
    };


    // console.log(props);
    const {data} = props;
    return (
        <div className="border-l-tahiti bg-bermuda m-2 p-2 text-center">
            <p>Name : {data.name}</p>
            <p>price: {data.price}</p>
            <p>Status: {data.status}</p>
            <button className="bg-metal hover:bg-midnight text-white p-1 rounded-2xl"
            value={data.id}
            onClick={() => handleAddItem(props)}
            >Add (+)</button>
        </div>
    );
};

export default MennuList;
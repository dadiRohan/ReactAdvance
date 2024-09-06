import React from "react";

const MennuList = (props) => {
    console.log(props);
    const {data} = props;
    return (
        <div className="border-l-tahiti bg-bermuda m-2 p-2 text-center">
            <p>Name : {data.name}</p>
            <p>price: {data.price}</p>
            <p>Status: {data.status}</p>
            <button className="bg-bubble-gum text-white p-1 rounded-2xl"
            value={data.id}>Add</button>
        </div>
    );
};

export default MennuList;
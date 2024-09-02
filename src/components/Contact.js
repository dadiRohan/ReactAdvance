import React, {useState,useEffect} from "react";

export const Contact = () => {

    const [userData,setUserData] = useState([]);

    const fetchUsers = async () => {
        const userList = await fetch('https://jsonplaceholder.typicode.com/users');
        const userJson = await userList.json();
        setUserData(userJson);
        // console.log(userJson);
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    return (
        <div className="contact-header">
            <h1>Users List</h1>    

            <form>
                <input type="text" name="username" className="text-sm font-medium leading-6 text-gray-900"/>
                <input type="text" name="useremail" className="text-sm font-medium leading-6 text-gray-900"/>
                <input type="text" name="userphone" className="text-sm font-medium leading-6 text-gray-900"/>
                <input type="submit"/>
            </form>

            <div className="flex flex-wrap ">
            {
                userData.map((data,index)=>(
                        
                    <div className="card2 " key={index}>
                        <p><b>Name : </b>{data?.name} </p>
                        <hr/>
                        <p><b>Email :</b> {data?.email} </p>
                        <p><b>Phone :</b> {data?.phone} </p>
                        <p><b>Website : </b> {data?.website} </p>
                        <p><b>City : </b> {data?.address?.city} </p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
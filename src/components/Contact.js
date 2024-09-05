import React, {useState,useEffect} from "react";

export const Contact = () => {

    const [userData,setUserData] = useState([]);

    const [firstName,setFirstName] = useState();
    const [firstEmail,setFirstEmail] = useState();
    const [firstPhone,setFirstPhone] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataInput = {
            'name' : firstName,
            'email' : firstEmail,
            'phone' : firstPhone
        };
        
        fetch("https://jsonplaceholder.typicode.com/users",{
            method : 'post',
            data : dataInput
        }).then(res=>{
            console.log(res);
            if(res.status == 200 || res.status == 201){
                alert('User '+firstName+' Added Successfully!!!');
                setFirstName("");
                setFirstEmail("");
                setFirstPhone("");
            }else{
                alert('Technical Error');
            }
        });
    };

    const fetchUsers = async () => {
        const userList = await fetch("https://jsonplaceholder.typicode.com/users");
        const userJson = await userList.json();
        setUserData(userJson);
        // console.log(userJson);
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    return (
        <div className="contact-header">

            <form className="text-center">
                <input type="text" name="personname" placeholder="Enter Name" className="w-100 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-2" 
                value={firstName}
                onChange={(e)=>{setFirstName(e.target.value)}}/>

                <input type="text" name="personemail" placeholder="Enter Email" className="w-100 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-2"
                value={firstEmail}
                onChange={(e)=>{setFirstEmail(e.target.value)}}/>

                <input type="text" name="personphone" placeholder="Enter No." className="w-100 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-2" 
                value={firstPhone}
                onChange={(e)=>{setFirstPhone(e.target.value)}}/>

                <input type="submit" onClick={handleSubmit} className="m-2 p-2 text-white rounded-full bg-metal from-metal to-purple hover:from-tahiti hover:to-metal"/>
            </form>

            <h1 className="text-white text-center font-black bg-purple">User's List</h1>    
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
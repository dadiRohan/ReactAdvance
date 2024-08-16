import React, {useEffect,useState} from "react";

export const NormalState = () => {
    const [initState, setinitState] = useState(0);

    return (
        <div id="normal-state">
            <button onMouseOver ={
               () => setinitState(initState+1)
            }>{initState} Time's Hover</button>
        </div>
    )
};

export const UseStateVar = () => {
    const [elem, setElem] = useState(0);

    return (
        <div id="hookId">
            <button onClick={
               () => setElem(elem+1)
            }>(+)</button>
            <button>{ elem }</button>
            <button onClick={
              () => (elem > 0) ? setElem(elem-1) : 0
            }>(-)</button>
        </div>
    )
};

//-----------------------------------------------------------------------------------------//

export const NormalEffect = () => {
    const [updateData, setUpdateData] = useState(false)
    const [userName,setUserName] = useState({
        dept_name : "IT",
        first_name : "Rohan",
        last_name : "Sable"
    });

    useEffect(()=>{
        if(updateData){
            setUserName(prevName => {
                return {...prevName, first_name:"Saurabh", last_name:"Shukla"}
            })
        }
        else {
            setUserName(prevName => {
                return {...prevName, first_name:"Olushula", last_name:"Henry"}
            })
        }
    },[updateData])

    return (
        <div id="normal-effect">
            <button onClick={()=>setUpdateData(!updateData)}>
                Name is {`${userName?.first_name} ${userName?.last_name}`} From {`${userName?.dept_name}`}
            </button>
        </div>
    )
};

//-----------------------------------------------------------------------------------------//

export const Dashed = () => {
    const [initDash,setInitDash] = useState('');

    const [intcount,updateCount] = useState(0);

    return (
        <div id="dashed">
            Begin {intcount} :{initDash} 
            <button onMouseEnter ={
               () =>{   
                    setInitDash(initDash + ' 😊 ')
                    updateCount(initDash.trim().length)
                }
            }>+</button>

            <button onMouseEnter ={
               () => setInitDash('😒')
            }>-</button>
        </div>
    )
};
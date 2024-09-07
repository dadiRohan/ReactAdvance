import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handlePop = (e) => {
        dispatch(removeItem(e));
    }

    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-4xl font-bold decoration-dashed">Cart</h1>
            <button className="bg-metal text-silver rounded-3xl p-1 mt-7 hover:bg-purple"
            onClick={
                handleClearCart
            }
            >Clear Cart</button>

            <div className="w-6/12 ml-80 flex flex-wrap ">
            {
                cartItems.length === 0 ?
                (<div className="border-l-tahiti bg-tahiti text-white ml-52 mt-12 mb-12 p-2 text-center ">Your Cart is Empty Add Items</div>)
                :
                cartItems.map((itmData)=>(
                    <div className="border-l-tahiti bg-bermuda m-2 p-2 text-center">
                    <p>Name : {itmData?.data?.name}</p>
                    <p>Price : {itmData?.data?.price}</p>
                    <p>Status : {itmData?.data?.status}</p>
                    <button className="bg-metal hover:bg-midnight text-white"
                    onClick={handlePop}
                    >Cancle(-)</button>
                    </div>
                ))
            }
            </div>
        </div>
    )
};

export default Cart;
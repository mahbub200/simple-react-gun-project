import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';
import './Cart.css'

const Cart = () => {
    const [guns,setGuns]=useState([])
    const [cart,setCart]=useState([]);
    function handleAddToCart(guns){
        // console.log(guns);
        const newCart=[...cart,guns]
        setCart(newCart)
    }
    // console.log(guns);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])
    return (
       <div className='counter'>
        <h2>{cart.length}</h2>
         <div className='cart'>
           
        {guns.map(gun=><Information gun={gun} cart={cart} handleAddToCart={handleAddToCart}
        key={gun.id}></Information>)}
        </div>
       </div>
    );
};

export default Cart;
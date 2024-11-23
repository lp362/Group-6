import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Components/Context/CartContext';
import '../styles/Cart.css'


const Cart = () => {

   const {cart, setCart} = useContext(CartContext);

   const handleRemove = (id) => {

    const newCart= cart.filter(course => course.id !== id);
    setCart(newCart);



   }

    return(
        
        <div className='cart-page'>

            <h1>Your Cart:</h1>
            {cart.length > 0 ? (
                cart.map((course,index) => (

                    <div key={index} className='cart-item'>

                    <h2>{course.name}</h2>
                    <img src={course.image} alt=""/>
                    <button onClick={()=> handleRemove(course.id)}>Remove</button>


                    </div>



                ))


            ) : (

                <p>No courses in the cart</p>


            )}




        </div>


    )



}

export default Cart
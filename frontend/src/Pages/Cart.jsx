import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Components/Context/CartContext';
import '../styles/Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);

    const navigate = useNavigate();



    const handleConfirm = () => {

        if (cart.length == 0) {
            alert("Your cart is empty");
            return;
        }

        alert("Enrollment confirmed for all courses in the cart!");
        setCart([]); //clear cart

        navigate('/')


    }

    const handleRemove = (id) => {

        const newCart = cart.filter(course => course.id !== id);
        setCart(newCart);



    }

    return (

        <div className='cart-page'>

            <h1>Your Cart:</h1>

            {cart.length > 0 ? (

                <>
                    {cart.map((course,index) => (

                    <div key={index} className='cart-item'>

                        <h2>{course.name}</h2>
                        <img src={course.image} alt="" />
                        <button onClick={() => handleRemove(course.id)}>Remove</button>


                    </div>

                    ))}
                    <button className='confirm' onClick={handleConfirm}>Confirm Enrollment</button>

                </>
                
            ) : (

                <p>No courses in the cart</p>


            )}




        </div>


    );



}

export default Cart
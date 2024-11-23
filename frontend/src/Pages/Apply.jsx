import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import data_product from "../Components/Assets/all_courses";
import '../styles/Apply.css'
import { CartContext } from '../Components/Context/CartContext';
import { useContext } from 'react';



const Apply = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {cart, setCart}= useContext(CartContext);


    const course = data_product.find(item=>item.id === Number(id));

    const handleConfirm = () => {

        if(course){
            setCart([...cart,course]) //Add course to cart
        }

        navigate('/cart');


    }

    return(
        

        <div className="apply-page">

           
            <h1>Course Selected: </h1>
            {course && (
                <>

                    <img src={course.image} alt=""/>
                    <h2>{course.name}</h2>
                    <p>{course.concept}</p>
                    <p>{course.concept_elaborate}</p>
                    <p><strong>Tutor: </strong>{course.tutor}</p>
                    
                    <button onClick={handleConfirm}>Enroll</button>
                
                
                
                
                </>






            )}







        </div>






    );






};

export default Apply
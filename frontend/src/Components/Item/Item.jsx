import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'


const Item = (props) => {

    const navigate = useNavigate();

    const handleEnroll =()=>{

        navigate(`/apply/${props.id}`);


    };

    return (

        <div className='item'>
            <img src={props.image} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.concept}</p>
            <button onClick={handleEnroll}>Enroll</button>
           
        </div>

       
        
     )
    
}

export default Item
import React from 'react'
import './popular.css'
import data_product from '../assets/data'

const popular=()=> {
    return(
        <div className='popular'>
            <h1>Python Course Available</h1>
            <hr />
            <div className="python-courses-available">
                {data_product.map((course)=>{
                    return <course key={i} id={course.id} name={course.name} image={course.image} course_type={course.type}/>
                })}
                <div className="java-courses-available">
                {data_product.map((course)=>{
                    return <course key={i} id={course.id} name={course.name} image={course.image} course_type={course.type}/>
                })}
                <div className="unity-courses-available">
                {data_product.map((course)=>{
                    return <course key={i} id={course.id} name={course.name} image={course.image} course_type={course.type}/>
                })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default popular
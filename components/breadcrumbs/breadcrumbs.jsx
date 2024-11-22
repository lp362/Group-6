import React from 'react'
import './breadcrumb.css'
import arrow from '../assest/arrow.png'

const breadcrumb=(props)=>{
    const {product}=props;
    return(
        <div className='breadcrumb'>
            HOME <img src={arrow} alt=""/> COURSES <img src={arrow} alt=""/>Python <img src={arrow} alt=""/>{product.category}<img src={arrow} alt=""/> {product.name}
        </div>
    )
}

export default breadcrumb
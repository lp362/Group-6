import React from 'react'
import './descriptionbox.cc'

const descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (10)</div>
        </div>
        <div className="descriptionbox-description">
            <p>We are an E-commerce web application for free educational courses to help aspiring learners, students, and people looking to change careers</p>
            <p>Each courses offers a brief description and different difficulties</p>
        </div>
    </div>
  )    
}

export default descriptionbox
import React from 'react' 
import './hero.css'
import course1 from '../assests/course1.png'
import course2 from '../assests/course2.png'
import course3 from '../assests/course3.png'
import logo from '../assests/logo.png'

const Hero =()=> {
    return(
        <div className='hero'>
            <div className="hero-left">
                <h2>COURSES</h2>
                <div>
                    <div className="course1.png">
                        <p>course</p>
                        <img src={course1.png} alt="" />
                    </div>
                    <p>course</p>
                </div>
                <div className="hero-latest-btn">
                    <div>All Courses</div>
                    <img src={course1.png} alt="" />
                    <img src={course2.png} alt="" />
                    <img src={course3.png} alt="" />
                </div>
            </div>
            <div className="hero-right">
            <img src={logo.png} alt="" />
            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import './Hero.css'
import programming from '../Assets/Poster.jpg'




const Hero = () => {

    return (

        <div className='main'>

            <div className='section-1'>


                <div className="main-left">
                    <h2>Programming courses for everyone</h2>
                    <div className="programming-poster">
                        <p>C++, Python, Java</p>
                        <p>for everyone</p>

                    </div>

                    <div className='main-latest-btn'>
                        <div>Enroll now</div>


                    </div>

                </div>

                <div className="main-right">
                    <img src={programming} alt="" />

                </div>


            </div>

            <div className='section-2'>

                <h1>Testimonials</h1>

                <div className='testimonials'>

                    <div className='testimonial-card'>
                        <h2>Manuel</h2>
                        <h3>The curses are very well structured and helpful</h3>
                        <p>I signed my teenager up for the Python for Kids course, and they’re loving it! It’s great to see them so excited about learning.</p>

                    </div>

                    <div className='testimonial-card'>
                        <h2>Ronald</h2>
                        <h3>Satisfied</h3>
                        <p>My daughter has always been curious about computers, and these courses have sparked her interest even more. Thank you for making coding accessible to young minds!.</p>


                    </div>

                    <div className='testimonial-card'>
                        <h2>Steven</h2>
                        <h3>Challenging but Rewarding</h3>
                        <p>The projects included in the courses pushed me out of my comfort zone, but they were worth it. I built my first fully functional e-commerce website after completing a single course!</p>

                    </div>



                </div>


            </div>


        </div>
           
           
           
        
        
     )
    
}

export default Hero
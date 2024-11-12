import React from 'react'
import './Main.css'
import programming from '../Assets/programming.jpg'

const Main = () => {

    return (

        <div className='main'>
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
                <img src={programming} alt=""/>
               

            </div>



        </div>



    )


}

export default Main
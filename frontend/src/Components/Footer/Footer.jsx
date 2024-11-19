import React from 'react'
import './Footer.css'


const Footer = () => {

    return (


        <div className='footer'>
            <div className='footer_paddding'>
                <div className='footer_links'>
                    <div className='footer_links_div'>
                        <h4>Tutoring+</h4>
                        <a href='/aboutUs'>
                            <p>About Us</p>
                        </a>
                        <a href='/whatweoffer'>
                            <p>What we offer</p>
                        </a>
                        <a href='/catalog'>
                            <p>Catalog</p>
                        </a>
                        <a href='/socialimpact'>
                            <p>Social Impact</p>
                        </a>

                    </div>

                    <div className='footer_links_div'>
                        <h4>Community</h4>
                        <a href='/learners'>
                            <p>Learners</p>
                        </a>
                        <a href='/blog'>
                            <p>Blog</p>
                        </a>



                    </div>

                    <hr></hr>

                    <div className='footer_below'>
                        <div className='footer_copy'>
                            <p>
                                @{new Date().getFullYear()} Tutoring+. All right reserved


                            </p>


                        </div>
                        <div className='footer_below_links'>

                            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                            <a href='/terms'><div><p>Privacy</p></div></a>

                        </div>

                    </div>




                </div>



            </div>





        </div>



    )

}

export default Footer
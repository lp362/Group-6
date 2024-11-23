import React from 'react'
import '../styles/ContactUs.css'




const ContactUs = () => {

    return(
        
        <section className='contact'>
            <form>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" className='field' placeholder="Enter your Name" required></input>


                </div>
                <div className='input-box'>
                    <label>E-mail Adress</label>
                    <input type="text" className='field' placeholder="Enter your email" required></input>


                </div>
                <div className='input-box'>
                    <label>Your message</label>
                    <textarea name="" id="" type="text" className='field content' placeholder="Enter your message" required></textarea>


                </div>

                <button type="submit">Send Message</button>




            </form>


        </section>

    )



}

export default ContactUs
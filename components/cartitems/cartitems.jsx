import React from 'react'
import './cartitems.css'
import removeicon from '../assets/cartx.png'
const cartitems=() =>{
    const{data,cartitems,removefromcart}=useContext(coursecontext)
    return(
        <div className='cartitems'>
            <div className="cartitmes-format-main">
                <p>Courses</p>
                <p>Title</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
            <hr />
            {data.map((e)=>{
                if(cartitem[e.id]>0)
                {
                    return <div>
                    <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>{e.difficulty}</p>
                    <button className='cartitems-quantity'>{cartitmes[e.id]}</button>
                    <img className='cartitems-remove-icon' src={remove} onClick={()=>{removefromcart(e.id)}}alt=""/>
                </div>
                <hr/>
            </div>
                }
                return null;
             })}
           <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <h3>Total Courses Enrolled</h3>
                        <h3>{gettotalcartamount()}</h3>
                    </div>
                    <button>Enroll</button>
                </div>
            </div>
            </div>     
        </div>
    )
}

export default cartitems
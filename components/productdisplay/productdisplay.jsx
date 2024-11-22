import React from 'react'
import './productdisplay.css'

const productdisplay=(props)=>{

    const {product}=props;
    const{addtocart}=useContext(coursecontext);
    return(
        <div className='productdisplay'>
            <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src= {product.image} alt=""/>
                <img src= {product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img'src={product.image} alt=""/>
            </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <p>(10)</p>
                </div>
                <div className="productdisplay-right-description">
                An introductory course to Python covering the basics of programming, data types, loops and functions!
                </div>
                <div className="productdisplay-right-difficulty">
                    <h1>Selelct course difficulty</h1>
                    <div className="productdisplay-right-difficulties">
                        <div>Easy</div>
                        <div>Hard</div>
                    </div>
                </div>
                <button onClick={()=>{addtocart(prooduct.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>category :</span>Python, Easy, Hard</p>
            </div>
        </div>
    )
}

export default productdisplay
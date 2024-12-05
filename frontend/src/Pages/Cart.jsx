import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Components/Context/CartContext';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import { fetchCartItems, removeCourseFromCart, confirmEnrollment } from '../api'; // Import API calls

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Fetch cart items from the backend when the component loads
    useEffect(() => {
        const loadCartItems = async () => {
            try {
                const cartData = await fetchCartItems();
                setCart(cartData);
            } catch (error) {
                console.error("Failed to load cart items:", error);
            }
        };

        loadCartItems();
    }, [setCart]);

    const handleConfirm = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty");
            return;
        }

        try {
            setLoading(true);
            await confirmEnrollment(cart); // Confirm enrollment via API
            alert("Enrollment confirmed for all courses in the cart!");
            setCart([]); // Clear the cart locally
            navigate('/');
        } catch (error) {
            console.error("Failed to confirm enrollment:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = async (id) => {
        try {
            await removeCourseFromCart(id); // Remove course from the backend cart
            const newCart = cart.filter(course => course.id !== id); // Update local cart
            setCart(newCart);
        } catch (error) {
            console.error(`Failed to remove course with ID ${id} from cart:`, error);
        }
    };

    return (
        <div className='cart-page'>
            <h1>Your Cart:</h1>
            {loading && <p>Processing...</p>}
            {cart.length > 0 ? (
                <>
                    {cart.map((course, index) => (
                        <div key={index} className='cart-item'>
                            <h2>{course.name}</h2>
                            <img src={course.image} alt={course.name} />
                            <button onClick={() => handleRemove(course.id)}>Remove</button>
                        </div>
                    ))}
                    <button className='confirm' onClick={handleConfirm} disabled={loading}>
                        {loading ? "Processing..." : "Confirm Enrollment"}
                    </button>
                </>
            ) : (
                <p>No courses in the cart</p>
            )}
        </div>
    );
};

export default Cart;

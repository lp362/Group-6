import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Components/Context/CartContext";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";
import { fetchCartItems, removeCourseFromCart, confirmEnrollment } from "../api";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch cart items from the backend
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        setLoading(true);
        const cartData = await fetchCartItems(); // Fetch cart items from the API
        console.log("Fetched cart items:", cartData); // Debugging
        setCart(cartData); // Assuming cartData contains course objects
        setError("");
      } catch (err) {
        console.error("Failed to load cart items:", err);
        setError("Failed to load cart items. Please try again later.");
      } finally {
        setLoading(false);
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
      console.log("Confirming enrollment for courses:", cart); // Debugging
      // Pass the courses from the cart to the backend
      const response = await confirmEnrollment(); // Confirm enrollment via API
      console.log("Enrollment confirmation response:", response); // Debugging
  
      if (response?.message === "Enrollment confirmed.") {
        alert("Enrollment confirmed for all courses in the cart!");
        setCart([]); // Clear the cart locally
        navigate("/"); // Redirect to home page or any desired page
      } else {
        setError("Failed to confirm enrollment. Please try again.");
      }
    } catch (err) {
      console.error("Failed to confirm enrollment:", err);
      setError("Failed to confirm enrollment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleRemove = async (id) => {
    try {
      setLoading(true);
      console.log(`Attempting to remove course with ID: ${id}`); // Debugging
      const response = await removeCourseFromCart(id); // Remove course via API
      console.log("Remove response:", response); // Debugging
      // Check if the response was successful and filter out the removed course
      if (response?.message === "Course removed from cart.") {
        const updatedCart = cart.filter((course) => course.id !== id); // Filter out the removed course
        setCart(updatedCart); // Update cart state
        alert("Course removed successfully!");
      } else {
        setError("Failed to remove the course. Please try again.");
      }
    } catch (err) {
      console.error(`Failed to remove course with ID ${id} from cart:`, err);
      setError("Failed to remove the course. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="cart-page">
      <h1>Your Cart:</h1>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Processing...</p>}
      {cart.length > 0 ? (
        <>
          <div className="cart-items">
            {cart.map((course) => (
              <div key={course.id} className="cart-item">
                <h2>{course.name}</h2>
                <img src={course.image} alt={course.name} className="cart-item-image" />
                <button
                  onClick={() => handleRemove(course.id)}
                  className="remove-button"
                  disabled={loading}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            className="confirm-button"
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm Enrollment"}
          </button>
        </>
      ) : (
        <p className="empty-cart">No courses in the cart</p>
      )}
    </div>
  );
};

export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Apply.css";
import { CartContext } from "../Components/Context/CartContext";
import { fetchCourseDetails } from "../api"; // Import API call for fetching course details

const Apply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const [course, setCourse] = useState(null); // State for course details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Load course details from backend API
  useEffect(() => {
    const loadCourseDetails = async () => {
      try {
        setLoading(true);
        const courseData = await fetchCourseDetails(id); // Fetch course details via API
        setCourse(courseData);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError("Failed to load course details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadCourseDetails();
  }, [id]);

  const handleConfirm = () => {
    if (course) {
      // Check if course is already in the cart
      const isAlreadyInCart = cart.some((item) => item.id === course.id);
      if (isAlreadyInCart) {
        alert("Course is already in the cart.");
        return;
      }

      // Update the cart context
      setCart([...cart, course]);

      // Redirect to the cart page
      alert("Course added to the cart!");
      navigate("/cart");
    }
  };

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="apply-page">
      <h1>Course Details</h1>
      {course ? (
        <div className="course-details">
          <img src={course.image} alt={course.name} className="course-image" />
          <h2>{course.name}</h2>
          <p>{course.concept}</p>
          <p>{course.concept_elaborate}</p>
          <p>
            <strong>Duration:</strong> {course.duration}
          </p>
          <p>
            <strong>Tutor:</strong> {course.tutor}
          </p>
          <button onClick={handleConfirm} className="enroll-button">
            Enroll
          </button>
        </div>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
};

export default Apply;

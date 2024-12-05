import React, { useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import '../styles/Apply.css';
import { CartContext } from '../Components/Context/CartContext';
import { addCourseToCart, fetchCourseDetails } from '../api'; // Import API calls

const Apply = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);

    const [course, setCourse] = React.useState(null); // State for course details

    // Fetch course details from the backend
    React.useEffect(() => {
        const loadCourseDetails = async () => {
            try {
                const courseData = await fetchCourseDetails(id); // API call to fetch course details
                setCourse(courseData);
            } catch (error) {
                console.error("Failed to load course details:", error);
            }
        };

        loadCourseDetails();
    }, [id]);

    const handleConfirm = async () => {
        if (course) {
            try {
                // Add course to the backend cart
                await addCourseToCart(course.id);
                
                // Update the cart context (optional, based on your requirements)
                setCart([...cart, course]);

                // Navigate to the cart page
                navigate('/cart');
            } catch (error) {
                console.error("Failed to add course to cart:", error);
            }
        }
    };

    return (
        <div className="apply-page">
            <h1>Course Selected: </h1>
            {course && (
                <>
                    <img src={course.image} alt={course.name} />
                    <h2>{course.name}</h2>
                    <p>{course.concept}</p>
                    <p>{course.concept_elaborate}</p>
                    <p><strong>Duration:</strong>{course.duration}</p>
                    <p><strong>Tutor: </strong>{course.tutor}</p>
                    
                    <button onClick={handleConfirm}>Enroll</button>
                </>
            )}
        </div>
    );
};

export default Apply;

import React, { useState, useEffect } from "react";
import "./Training.css";
import Item from "../Item/Item";
import { fetchCourses } from "../../api";

const Training = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const coursesData = await fetchCourses(); // Fetch courses data
        console.log("Fetched courses:", coursesData); // Debugging log
        setCourses(coursesData);
        setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Failed to load courses. Please try again.");
        setLoading(false);  // Set loading to false in case of error
      }
    };
    
    loadCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>; // Show loading message while fetching
  if (error) return <p className="error">{error}</p>; // Show error message if any

  return (
    <div className="training">
      <h1>List of Courses</h1>
      <hr />
      <div className="training-items">
        {courses.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={
              item.image?.startsWith("http")
                ? item.image
                : `${process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:8000"}${item.image}`
            }
            concept={item.concept}
          />
        ))}
      </div>
    </div>
  );
};

export default Training;

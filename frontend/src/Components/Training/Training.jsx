import React, { useState, useEffect } from "react";
import "./Training.css";
import Item from "../Item/Item";
import { fetchCourses } from "../../api";

// Map local image paths
const imageMap = {
  "Java Programming": "/images/Java-programming.png",
  "Python Programming": "/images/python.jpg",
  "Web Development": "/images/html-css.png",
  "C++ Programming": "/images/c++.png",
};

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
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Failed to load courses. Please try again.");
        setLoading(false); // Set loading to false in case of error
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
        {courses.map((item) => {
          const mappedImage = imageMap[item.name] || "/images/placeholder.png"; // Use fallback image if mapping is missing
          console.log(`Course: ${item.name}, Image: ${mappedImage}`); // Debugging log for mapping
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={mappedImage}
              concept={item.concept}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Training;

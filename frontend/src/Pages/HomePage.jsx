import React from "react";
import Hero from "../Components/Hero/Hero";
import "../styles/HomePage.css";

const HomePage = () => {
  const testimonials = [
    { name: "Manuel", feedback: "The courses are very well structured and helpful." },
    {
      name: "Ronald",
      feedback: "My daughter has always been curious about computers, and these courses have sparked her interest even more.",
    },
    {
      name: "Steven",
      feedback: "The projects included in the courses pushed me out of my comfort zone, but they were worth it!",
    },
  ];

  const courses = [
    {
      title: "JavaScript Basics",
      description: "Kickstart your programming journey with JavaScript.",
    },
    {
      title: "React Fundamentals",
      description: "Learn how to build web applications using React.",
    },
    {
      title: "Python for Beginners",
      description: "Master Python to start your data science career.",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <Hero />

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Highlights Section */}
      <div className="course-highlights-section">
        <h2>Explore Our Popular Courses</h2>
        <div className="course-highlights">
          {courses.map((course, index) => (
            <div className="course-highlight" key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

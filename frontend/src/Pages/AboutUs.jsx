import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const team = [
    { name: "Great Osikhueme", role: "Developer" },
    { name: "Meetkumar Patel", role: "Developer" },
    { name: "Lidia Pena-Lauria", role: "Developer" },
    { name: "Isavella Sevastos", role: "Developer" },
    { name: "Mario Soto Sanchez", role: "Developer" },
  ];

  return (
    <div className="aboutus">
      <h1>About Us</h1>
      <p>
        We are a team of passionate developers dedicated to creating free and
        accessible educational tools for everyone. Our goal is to empower
        learners worldwide with quality resources.
      </p>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-photo-placeholder">
                {/* Placeholder for team member photos */}
                <span>{member.name.charAt(0)}</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

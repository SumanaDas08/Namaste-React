import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    return (
      <div className="about-page">

        {/* Hero */}
        <div className="about-hero">
          <h1>About <span style={{ color: "#ff5722" }}>NamasteFood</span> 🍽️</h1>
          <p>We connect hungry people with the best restaurants in their city — fast, fresh, and delicious.</p>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {[
            { value: "500+", label: "Restaurants" },
            { value: "1M+", label: "Happy Customers" },
            { value: "50+", label: "Cities" },
            { value: "4.8⭐", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="about-stat-card">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="about-mission">
          <div className="about-mission-text">
            <h2>Our Mission 🚀</h2>
            <p>
              At NamasteFood, we believe great food should be accessible to everyone.
              Our platform brings together the finest local restaurants and delivers
              their best dishes right to your doorstep — in minutes, not hours.
            </p>
            <p>
              We work closely with restaurant partners to ensure quality, hygiene,
              and taste are never compromised. Every order is a promise of freshness.
            </p>
          </div>
          <div className="about-mission-img">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
              alt="food"
            />
          </div>
        </div>

        {/* Team */}
        <div className="about-team">
          <h2>Meet the Team 👥</h2>
          <div className="about-team-grid">
            {[
              { name: "Sumana Das", role: "Founder & CEO", emoji: "👩‍💼", location: "Surat, Gujarat" },
              { name: "Shivam Kumar", role: "Lead Developer", emoji: "👨‍💻", location: "Delhi" },
              { name: "Priya Sharma", role: "UI/UX Designer", emoji: "👩‍🎨", location: "Mumbai" },
              { name: "Rahul Verma", role: "Backend Engineer", emoji: "👨‍🔧", location: "Bangalore" },
            ].map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-emoji">{member.emoji}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-location">📍 {member.location}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default About;

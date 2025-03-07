import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Welcome</h1>
        <p className="home-text"> to <br /> My Website!</p> <br />
        <button className="home-button">Get Started</button> 
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import './Footer.css';
function Footer() {
  return (
    
    <footer className="foot" style={{padding:'0px',}}>
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>

    <ul className="menu">
      <li><a href="/">Home</a></li>
      <li><a href="#template">Template</a></li>
      <li><a href="/create-cv">Create CV</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <p>©2023 My Expert-CV | All Rights Reserved</p>
  </footer>  )
}

export default Footer
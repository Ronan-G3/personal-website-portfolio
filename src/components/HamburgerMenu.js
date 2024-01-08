// HamburgerMenu.js
import React from 'react';
import '../styles/HamburgerMenu.css'; // Ensure you have the correct path

function HamburgerMenu({ toggleSidebar }) { // Accept toggleSidebar as a prop
  return (
    <div className="hamburger-menu" onClick={toggleSidebar}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerMenu;

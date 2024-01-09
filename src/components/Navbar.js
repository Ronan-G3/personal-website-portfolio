// Navbar.js
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Make sure this component exists and is exported correctly.
import HamburgerMenu from './HamburgerMenu'; // Make sure this component exists and is exported correctly.
import '../styles/Navbar.css';
import '../styles/HamburgerMenu.css'; // Ensure the CSS file exists and path is correct.

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">Ronan Glennon</a>
        <HamburgerMenu toggleSidebar={toggleSidebar} />
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Navbar;

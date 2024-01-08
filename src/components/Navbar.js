// Navbar.js
import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Sidebar from './Sidebar'; // Import Sidebar
import '../styles/Navbar.css'; // Update with the correct path to your CSS file

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">Ronan Glennon</a>
        <HamburgerMenu toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar as a prop */}
      </nav>
      <Sidebar isOpen={isSidebarOpen} /> {/* Use the Sidebar here */}
    </>
  );
}

export default Navbar;

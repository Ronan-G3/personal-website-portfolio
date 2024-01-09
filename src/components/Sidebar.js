// Sidebar.js
import React from 'react';
import '../styles/Sidebar.css'; // Ensure you have a corresponding CSS file

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      <div className="sidebar-content">
        <button className="close-sidebar" onClick={toggleSidebar}>
          &times;
        </button>
        <nav className="sidebar-nav">
          <a href="#home" onClick={toggleSidebar}>Home</a>
          <a href="#about" onClick={toggleSidebar}>About</a>
          <a href="#projects" onClick={toggleSidebar}>Projects</a>
          <a href="#skills" onClick={toggleSidebar}>Skills</a>
          <a href="#contact" onClick={toggleSidebar}>Contact</a>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;

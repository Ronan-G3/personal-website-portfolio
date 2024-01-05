import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Front-end Developer", "Back-end Developer", "UI/UX Designer", "Graphic Designer", "Full Stack Developer"], // Add all your roles here
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Ronan Glennon's Portfolio</h1>
      <div ref={el}></div>
    </div>
  );
}

export default Home;

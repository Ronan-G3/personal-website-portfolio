import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';

function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Software Developer", "Front-end Developer", "Back-end Developer", "UI/UX Designer", "Graphic Designer", "Full Stack Developer"],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="home-section">
      <div className="home-content">
        <div className="home-text">
            <h1>Hello, I'm Ronan Glennon</h1>
            <h2>I am a <span ref={el}></span></h2>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useRef, useEffect } from 'react';
import './home.css';
import pdf from "/matrial/Data/resume.pdf"
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'WELCOME TO MY PORTFOLIO',
        'I am Dhruv Mudhagal',
        'Full Stack Developer',
        'Specialized in Java',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container" id='Home'>
      <div className="home-left" 
        data-aos="fade-right"
         data-aos-duration="1000">
        <p>
          <span ref={typedRef}></span>
        </p>
        <a href={pdf} className="btn btn-outline-warning" download>
          Download Resume.pdf
        </a>
      </div>
      <div className="home-right"
        data-aos="fade-left"
         data-aos-duration="1000">
        <div className="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13huNceuTbD4SzPp_WWtAp2FKH5Co7a6wJg&s"
            alt="Hero showcasing developer"
          />
          <p id="name">Dhruv Mudhagal</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

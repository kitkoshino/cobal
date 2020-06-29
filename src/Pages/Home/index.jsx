import React from 'react';
import './style.scss';

function Home() {
  return (
    <div className="home-container">
      <section className="home-first-section">
        <h1>Make Your Team the best it can be</h1>
        <button>Enter</button>
      </section>
      <section className="home-text">
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore inventore veritadipisci velit, snumquam eius </p>
      </section>
      <section className="home-augmented-reality-section">
       <div>
          <h2>Augmented reality</h2>
          <hr className="separator" />
          <hr className="separator-2" />

          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          <button>LEARN MORE</button>
        </div>
      </section>
    </div>
  );
}

export default Home;

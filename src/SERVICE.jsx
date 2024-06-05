import React from 'react';

const SERVICE = () => {
  return (
    <div>
<div>
  {/* HEADER */}
  <header className="header" id="home">
    <div className="container">
      <nav className="header-navigation" aria-label="navigation">
        <div className="logo"><span className="yellow">M</span>Fitness</div>
        <img src="img/nav-icon.svg" alt="navigation icon" className="nav-icon" width={30} height={30} />
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    {/* HERO SECTION */}
    <section className="section-hero-service">
      <div className="container hero-box">
        <div className="hero-content margin-bottom">
          <h1 className="heading heading--1 margin-bottom">
            Host wellness workshops focusing on nutrition, 
            stress management, or mental health.
          </h1>
        </div>
        <div className="btn-group">
          <button className="btn btn__secondary"><a href="service op.html">Exercise</a></button>
          <button className="btn btn__secondary"><a href="dietop.html">Diet</a></button>
        </div>
      </div>
    </section>
  </main></div>
    
    </div>
  );
}

export default SERVICE;

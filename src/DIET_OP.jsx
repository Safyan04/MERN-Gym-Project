import React from 'react';

const DIET_OP = () => {
  return (
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
    <section className="section-hero-opservice">
      <div className="container hero-box">
        <div className="hero-content margin-bottom">
          <h4 className="heading heading--1 margin-bottom">
            Choose an option for Diets
          </h4>
        </div>
        <div className="btn-group">
          <button className="btn btn__secondary"><a href="./op d/absd.html">Abs</a></button>
          <button className="btn btn__secondary"><a href="./op d/chest.html">Chest</a></button>
          <button className="btn btn__secondary"><a href="./op d/bchestd.html">Back Chest</a></button>
          <button className="btn btn__secondary"><a href="./op d/biceps.html">Biceps</a></button>
          <button className="btn btn__secondary"><a href="./op d/legs.html">Legs </a></button>
          <button className="btn btn__secondary"><a href="./op d/armsd.html">Amrs</a></button>
        </div>
      </div>
    </section>
  </main></div>

  );
}

export default DIET_OP;

import React from 'react';

const SERVICE_OP = () => {
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
    <section className="section-hero-opservice">
      <div className="container hero-box">
        <div className="hero-content margin-bottom">
          <h4 className="heading heading--1 margin-bottom">
            Choose an option for exercise
          </h4>
        </div>
        <div className="btn-group">
          <button className="btn btn__secondary"><a href="./opex/absex.html">Abs</a></button>
          <button className="btn btn__secondary"><a href="./opex/chest.html">Chest</a></button>
          <button className="btn btn__secondary"><a href="./opex/bchest.html">Back Chest</a></button>
          <button className="btn btn__secondary"><a href="./opex/biceps.html">Biceps</a></button>
          <button className="btn btn__secondary"><a href="./opex/legs.html">Legs </a></button>
          <button className="btn btn__secondary"><a href="./opex/armsex.html">Amrs</a></button>
        </div>
      </div>
    </section>
  </main></div>

    
    </div>
  );
}

export default SERVICE_OP;

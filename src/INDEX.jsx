import React from 'react';

const INDRX = () => {
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    {/* HERO SECTION */}
    <section className="section-hero">
      <div className="container hero-box">
        <div className="hero-content margin-bottom">
          <h1 className="heading heading--1 margin-bottom">
            A place for your fitness goals
          </h1>
          <p className="description">
            We Offer Functional Training, Plyometric Boxes, Aerobics classes,
            TRX And Much More
          </p>
        </div>
        <div className="btn-group">
          {/*<button className="btn btn__primary margin-right margin-bottom">
            <a href="login.html">
              Join us </a>
  </button>*/}
          <button className="btn btn__secondary margin-right margin-bottom"> <a href="./services.html" className="service">Our services</a></button>
        </div>
      </div>
    </section>
    {/* SECTION ABOUT */}
    <section className="section-about" id="about">
      <div className="about-box container">
        <div className="about-box__content" data-aos="fade-up">
          <h2 className="heading heading--2">
            About <span className="yellow">M</span>Fitness
          </h2>
          <h3> <span className="yellow">M</span>Fitness is the nickname of Online Fitness and Health Portal </h3>
          <p>
            Being physically active can improve your
            brain health, help manage weight, reduce 
            the risk of disease, strengthen bones and 
            muscles, and improve your ability to do 
            everyday activities. Adults who sit less 
            and do any amount of moderate-to-vigorous 
            physical activity gain some health benefits.
          </p>
          <a href="#" className="link-button">Read More →</a>
        </div>
        <figure className="about-box__image" data-aos="fade-up">
          <img src="img/about-img-1.jpg" alt="about-image-one" width={350} height={233} />
          <img src="img/about-img-2.jpg" alt="about-image-twwo" width={350} height={233} />
          <img src="img/about-img-3.jpg" alt="about-image-three" width={420} height={280} />
        </figure>
      </div>
    </section>
    {/* SECTION REVIEW */}
    <section className="section-review" id="review">
      <div className="review-box container" data-aos="fade-up">
        <h2 className="heading heading--2 underline margin-bottom grid-center">
          what people say
        </h2>
        <div className="review-card">
          <img src="img/review-img-1.jpg" alt="user" className="review-card__image" width={100} height={100} />
          <blockquote className="review-card__content">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sapiente possimus aperiam
            </p>
            <div className="name">Cesar Rincon</div>
          </blockquote>
        </div>
        <div className="review-card">
          <img src="img/review-img-2.jpg" alt="user" className="review-card__image" width={100} height={100} />
          <blockquote className="review-card__content">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sapiente possimus aperiam
            </p>
            <div className="name">Mathilde Langevin</div>
          </blockquote>
        </div>
      </div>
    </section>
    {/* SECTION CONTACT */}
    <section className="section-contact" id="contact">
      <div className="contact-box">
        <form className="form-grp" data-aos="fade-up">
          <h2 className="heading heading--2 margin-bottom">
            Get in <span className="yellow">Touch</span>
          </h2>
          <input type="text" className="form form__input" placeholder="Name" />
          <input type="text" className="form form__input" placeholder="Email" />
          <input type="text" className="form form__input" placeholder="Phone" />
          <textarea name="message" cols={5} rows={3} className="form form__input" placeholder="Message" defaultValue={""} />
          <button className="btn btn__primary form-flex">Send &nbsp;</button>
        </form>
        <div id="mapid" data-aos="fade-up" />
      </div>
    </section>
  </main>
  {/* FOOTER */}
  <footer className="section-footer" id="footer">
    <div className="footer-box container">
      <div className="contact-details">
        <h2 className="margin-bottom"><span className="yellow">M</span>Fitness</h2>
        <ul className="contact-data">
          <li className="location">ABC block, Burewala</li>
          <li className="phone">0300-1234567</li>
          <li className="email">MFitness@gmail.com</li>
          <li className="social">
            <img src="./img/logo-whatsapp.svg" alt="whatsapp icon" width={35} height={35} />
            <img src="./img/logo-facebook.svg" alt="facebook icon" width={35} height={35} />
            <img src="./img/logo-instagram.svg" alt="instagram icon" width={35} height={35} />
            <img src="./img/logo-twitter.svg" alt="twitter icon" width={35} height={35} />
          </li>
        </ul>
      </div>
      <nav className="footer-nav" aria-label="navigation">
        <div className="nav-name">Quick Links</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className="newsletter">
        <div className="newsletter__title">News Letter</div>
        <div className="newsletter__text">
          For updates linked with us!
        </div>
        <form className="newsletter__input">
          <input type="text" className="form" placeholder="example@gmail.com" />
          <img src="./img/send.svg" alt="send icon" className="send-icon" width={36} height={36} />
        </form>
      </div>
      <div className="legel">
        <p className="text">Presented © by Safyan&nbsp;</p>
        <a href="https://github.com/Manoranjan-D/responsive-website-gym">
          <img src="img/github.svg" alt="github" className="github" width={35} height={35} />
        </a>
      </div>
    </div>
  </footer>
</div>

  );
}

export default INDRX;

import React from 'react';

const LEGS = () => {
  return (
    <div>
 

    <div className="container">
  <h1> Exercises</h1> <br /><br />
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Legs/Legs 3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Stand with feet shoulder width apart and bend over. Hold a kettlebell in hands with 
        a neutral grip.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Legs/Legs 4.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Stand with feet shoulder width apart. Hold the barbell on the back of your shoulder in a 
        wide grip with palms facing forward.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Legs/Legs 6.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Stand with feet shoulder width apart and bend over. Extend your arms and hold a barbell
        with an overhand grip at the middle of your shines.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Legs/Legs 2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Stand at the end of table and place both hands on a table in front of you and move your
        feet up and down slowly.
      </h2>
    </div>
  </div>
  <hr />
</div>

    </div>
  );
}

export default LEGS;

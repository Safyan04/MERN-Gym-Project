import React from 'react';

const ARMEX = () => {
  return (
    <div>
   
  <div className="container">
  <h1> Exercises</h1> <br /><br />
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/arms/armstwo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Sit on bench with feet on the floor. Hold two dumbbell in both hands and swing them up &amp; down.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/arms/Arms 1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Sit on the end of bench with feet on the floor. Hold a Dumbbell in both hands and swing them up &amp;
        down.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/arms/Amrs 3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Stand on the floor. Hold a Dumbbell in both hands in an underhand grip and
        swing them up &amp; down.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/arms/Amrs 4.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Sit on the end of bench with feet on the floor. Hold the
        bar conneted to the low pulley in an underhand grip and shoulder width apart with
        elbow tucked to your sides.
      </h2>
    </div>
  </div>
  <hr />
</div>
 
    </div>
  );
}

export default ARMEX;

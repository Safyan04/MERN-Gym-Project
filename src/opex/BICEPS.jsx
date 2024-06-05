import React from 'react';

const BICEPS = () => {
  return (
    <div>
  

      <div className="container">
  <h1> Exercises</h1> <br /><br />
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Biceps/Biceps 3.mp4" type="video/mp4" />
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
          <source src="../videos/Biceps/Biceps 2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Lie on table with your feet flat on floor and hold two dumbbells in both hands
        and raise up &amp; down them
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Biceps/Biceps 1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Stand on the floor. Holding two dumbbells in both hands, lift first one up and down 
        and then other up and down.
      </h2>
    </div>
  </div>
  <hr />
</div>
   
    </div>
  );
}

export default BICEPS;

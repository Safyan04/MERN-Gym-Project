import React from 'react';

const CHEST = () => {
  return (
    <div>
   

    <div className="container">
  <h1> Exercises</h1> <br /><br />
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Chest/Chest 1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Sit in a chair, put weights on both handles as you like and move them up and down.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Chest/Chest 2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Place both your knees on the pulley before putting as you want on the pulley. Hold 
        the handles with both hands and move the pulley up and down.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Chest/Chest 3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Sit on a chair and push forward by putting as you want on 
        both handles and holding them firmly.
      </h2>
    </div>
  </div>
  <hr />
</div>
 
    </div>
  );
}

export default CHEST;

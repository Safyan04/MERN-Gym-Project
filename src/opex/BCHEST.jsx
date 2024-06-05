import React from 'react';

const BCHEST = () => {
  return (
    <div>
   
   
   <div className="container">
  <h1> Exercises</h1> <br /><br />
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Back chest/bchest2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Place one hand and one knee on a table while holding a dumbbell with other hand
        and raise it up and down.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Back chest/bchest3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Take two chairs and place an iron pipe on them with thier backs facing each other
        and hold the iron pipe well an move your body up and down.
      </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div>
        <video width={320} height={240} autoPlay muted loop>
          <source src="../videos/Back chest/bchest1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-8">
      <h2> <br />
        Hold an iron pipe firmly with both hands and lift your body up and down.
      </h2>
    </div>
  </div>
  <hr />
</div>
   
    </div>
  );
}

export default BCHEST;

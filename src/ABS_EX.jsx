import React from 'react';

const ABS_EX = () => {
  return (
    <div>
  <div className="flex">
    <div>
      <video width={320} height={240} autoPlay muted loop>
        <source src="./arms/armstwo.mp4" type="video/mp4" />
      </video>
    </div>
    <h1> <br />
      Sit on bench with feet on the floor. Hold two dumbbell in both hands and swing them up &amp; down.
    </h1>
  </div>
  <hr />
  <div className="flex">
    <div>
      <video width={320} height={240} autoPlay muted loop>
        <source src="./arms/Arms 1.mp4" type="video/mp4" />
      </video>
    </div>
    <h1>
      Sit on the end of bench with feet on the floor. Hold a Dumbbell in both hands and swing them up &amp; down.
    </h1>
  </div>
  <hr />
  <div className="flex">
    <div>
      <video width={320} height={240} autoPlay muted loop>
        <source src="./arms/Amrs 3.mp4" type="video/mp4" />
      </video>
    </div>
    <h1>
      Stand on the floor. Hold a Dumbbell in both hands and swing them up &amp; down.
    </h1>
  </div>
  <hr />
  <div className="flex">
    <div>
      <video width={320} height={240} autoPlay muted loop>
        <source src="./arms/Amrs 4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <h1>
      Sit on the end of bench with feet on the floor. Hold the 
      bar conneted to the low pulley in an underhand grip and shoulder width apart with
      elbow tucked to your sides.
    </h1>
  </div>
  <hr />
</div>

  );
}

export default ABS_EX;

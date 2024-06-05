import React from 'react';

const OK = () => {
  return (
  <div>
  {/* 
<div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-md-4 shadow"> */}
  {/* Signup Form */}
  {/* <div class="card">
        <div class="card-header">
          <h4 class="card-title text-center text-white">Login</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="signupEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="signupEmail" placeholder="Enter Email-id" >
            </div>
            <div class="mb-3">
              <label for="signupPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="signupPassword" placeholder="Enter Password" >
            </div>
            <div><span class="text-white">Do not Register</span> <a href="signup.html">Sign Up</a> </div><br>
            <div class="btn">
            <button type="submit" class="btn btn-primary" id="login" onclick="login()" >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div> */}
  <div className="login-dark">
    <form method="post">
      <h2 className="sr-only text-center">Register</h2>
      <br />
      <div className="form-group">
        <label htmlFor>Name</label>
        <input className="form-control" type="name" name="name" placeholder="Enter Name" />
      </div>
      <div className="form-group">
        <label htmlFor>Email</label>
        <input className="form-control" type="email" name="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor>Mobile Number</label>
        <input className="form-control" type="number" name="number" placeholder="Mobile Number" />
      </div>
      <div className="form-group">
        <label htmlFor>Password</label>
        <input className="form-control" type="password" name="password" placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor>Confirm Password</label>
        <input className="form-control" type="password" name="password" placeholder="Password" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block " type="submit">Register</button>
      </div><br />
    </form>
  </div>
  {/*  */}
</div>

  );
}

export default OK;

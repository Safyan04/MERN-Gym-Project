import React from 'react';

const SIGNUP = () => {
  return (
    <div>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            {/* Signup Form */}
            <div className="card">
              <div className="card-header">
                <h4 className="card-title text-center">Register</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="signupName" className="form-label">Enter Name</label>
                    <input type="name" className="form-control" id="signupName" placeholder="Enter Name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="signupEmail" placeholder="Enter Email-id" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="0300-1234567" pattern="[0-9]{4}-[0-9]{7}" id="signupNumber" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signupPassword" placeholder="Enter Password" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="signupConfirmPassword" placeholder="Enter Again Password" required />
                  </div>
                  <div className="btn">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-primary" type="button">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></div>

    </div>
  );
}

export default SIGNUP;

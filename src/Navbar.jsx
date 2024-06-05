import React, { useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom'
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    // localStorage.clear()
    navigate('/login')
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <Link className="navbar-brand logo" to="/">MFitness</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-outline-primary" 
                onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <div>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold me-2" aria-current="page" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold me-5" to="/login">Login</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


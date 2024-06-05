import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const REGISTER = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:5000/user/register",
          {username , email, password }
          );
          if(res.data){
            navigate("/login");
          }else{
            console.log("something is error");
          }
        } catch (error) {
          console.log(error);

        }
    }
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
                                <a href="index.html">Home</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
          
                {/* HERO SECTION */}
                <section className="section-hero-register">
                    <div className="container hero-box">
                        <div className="hero-content margin-bottom">
                        </div>
                        <div className="btn-group">
                            <p className="title">Register</p>
                            <p className="message">Sign up now</p>
                            <div className="form-group">
                                <label>
                                    <input type="text" required />
                                    <span>Firststname</span>
                                </label>
                                <label>
                                    <input type="text" required />
                                    <span>Lastname</span>
                                </label>
                            </div>
                            <label>
                                <input type="text" required />
                                <span>Email</span>
                            </label>
                            <label>
                                <input type="password" id="password" required />
                                <span>password</span>
                                <span className="icon" id="toggle password">
                                    <i className="far fa-eye-slash" />
                                </span>
                            </label>
                            <label>
                                <input type="password" id="passwordConfirm" required />
                                <span>Confirm password</span>
                                <span className="icon" id="togglepasswordConfirm">
                                    <i className="far fa-eye-slash" />
                                </span>
                            </label>
                            </div>    
                      </div>           
        </section >
</div>
  );
 
}

export default REGISTER;

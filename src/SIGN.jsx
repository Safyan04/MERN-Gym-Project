import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const SIGN = () => {
 
    const [name, setName] = useState('')
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
            <div className="login-dark">
                <form onSubmit={handleSubmit}>
                    <h2 className="sr-only text-center">Register</h2>
                    <br />
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name" required />
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" name="email" 
                            value={email}
                        onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input className="form-control" type="number" name="phone"
                        value={ph}
                        onChange={(e) => setPh(e.target.value)}
                        placeholder="phone" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input className="form-control" type="password" name="password"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                        placeholder="Password" required />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div><br />
                </form>
            </div>
            {/*  */}

        </div>
    );
}

export default SIGN;

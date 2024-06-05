import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
const LOGIN = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/login",
      {email, password }
      );
      if(res.data){
        navigate("/");
        localStorage.setItem('TOKEN', res.data.token)
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
      <h2 className="sr-only text-center">Login Form</h2>
      <br />
      <div className="form-group">
        <label htmlFor>Email</label>
        <input className="form-control" type="email" name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" required />
      </div>
      <div className="form-group">
        <label htmlFor>Password</label>
        <input className="form-control" type="password" name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" required />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="submit">Login</button>
      </div><br />
      {/*<a href="#" className="forgot">Forgot Your Password?</a><br /><br />*/}
      <Link to="/register" className="forgot">Do not Register.</Link>
    </form>
  </div>
</div>

  );
}

export default LOGIN;

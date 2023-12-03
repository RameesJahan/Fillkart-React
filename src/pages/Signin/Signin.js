import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import './Signin.css';

import IC_FACEBOOK from '../../assets/images/ic_facebook.png'
import IC_GOOGLE from '../../assets/images/ic_google.png'

const Signin = () => {
  const [viewPass, setViewPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  
  const handleEye = () => {
    setViewPass((state) => !state);
  }
  
  const handleSubmit = (e) => {
    //Sign in
  }
  
  const handleGoogle = () => {
    //Sign in with Google 
  }
  
  const handleFacebook = () => {
    //Sign in with Facebook 
  }
  
  
  
  return (
    <div className="sign-container">
      <div className="sign-content">
        <h1 className="sign-head">Sign In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input className="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <div className="pass-container">
            <input className="pass" type={viewPass?"text":"password"} placeholder="Password" onChange={(e) => setPass(e.target.value)} value={pass}/>
            <i className={viewPass?"fa-regular fa-eye-slash":"fa-regular fa-eye"}
               onClick={handleEye}
            ></i>
          </div>
          <div className="row">
            <div>
              <input type="checkbox" className="remember" name="remember" id="remember"  onChange={(e) => setIsRemember(e.target.checked)} checked={isRemember}/>Remember Me
            </div>
            <Link to="/">Forgot Password?</Link>
          </div>
          <input className="btn-submit" type="submit" value="Sign In"/>
        </form>
        <span className="txt-toggle">Don't have an account? <Link to="/auth/signup">Sign Up</Link></span>
        <div className="divider">
          <hr />
          <span>Or</span>
        </div>
        <div className="social-content">
          <div className="btn-social facebook" onClick={handleFacebook} >
            <img className="logo" src={IC_FACEBOOK} alt="Facebook" />
          </div>
          <div className="btn-social google" onClick={handleGoogle} >
            <img className="logo" src={IC_GOOGLE} alt="Google" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
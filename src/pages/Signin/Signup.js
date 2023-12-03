import React,{ useState } from 'react'
import { Link } from "react-router-dom";

import './Signin.css';

import IC_FACEBOOK from '../../assets/images/ic_facebook.png'
import IC_GOOGLE from '../../assets/images/ic_google.png'

const Signup = () => {
  const [viewPass, setViewPass] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  
  
  const handleEye = () => {
    setViewPass((state) => !state);
  }
  
  const handleSubmit = (e) => {
    //Sign Up
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
        <h1 className="sign-head">Sign Up</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input className="name" type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name} />
          <input className="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <input className="pass" type="text" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={pass} />
          <span className="pass-inst">A Password must include A-Z,a-z,Numbers and Special Charecters</span>
          <div className="pass-container">
            <input className="re-pass" type={viewPass?"text":"password"} placeholder="Confirm Password" onChange={(e) => setRePass(e.target.value)} value={rePass} />
            <i className={viewPass?"fa-regular fa-eye-slash":"fa-regular fa-eye"}
               onClick={handleEye}
            ></i>
          </div>
          <input className="btn-submit" type="submit" value="Create Account"/>
        </form>
        <span className="txt-toggle">Already have an account? <Link to="/auth/signin">Sign In</Link></span>
        <div className="divider">
          <hr />
          <span>Or</span>
        </div>
        <div className="social-content">
          <div className="btn-social facebook" onClick={handleFacebook}>
            <img className="logo" src={IC_FACEBOOK} alt="Facebook" />
          </div>
          <div className="btn-social google" onClick={handleGoogle}>
            <img className="logo" src={IC_GOOGLE} alt="Google" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
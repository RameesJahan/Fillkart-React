import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="nf-content" >
      <h1 className="nf-head" >404</h1>
      <h3>OOPS! Nothing Was Found</h3>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <Link to="/" ><div className="nf-btn" >Go Home</div></Link>
    </div>
  )
}

export default NotFound;
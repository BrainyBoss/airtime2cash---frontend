import React from 'react'
import Vector from '../../img/Vector.svg'
import './Confirmation.css'
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    
    <div className='confirmation_container'>
        <div className='confirmation_success'>
            
        <img className='manage_img' src={Vector} alt="" />
        <h1>Check your mail</h1>
        <p className='confirmation-p'>We sent a verification link to your email. Please click the link to verify your account.</p>
        <button onClick={navigateToLogin}>Back to Login</button>

        
        </div>

        </div>
  )
}

export default Confirmation

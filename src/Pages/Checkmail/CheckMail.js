import React from 'react'
import Vector from './img/Vector.svg'
import '../Confirmation/Confirmation.css'
import axios from '../../Api/axios'

import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const CheckMail = () => {
  const handleResend = async () => {
    const email = JSON.parse(localStorage.getItem('Email'))
    const response = await axios.post('/users/forgotpassword', { ...email })
    if (response.status === 200) {
      Swal.fire({
        title: 'success!',
        text: 'verification link sent',
        icon: 'success',
        confirmButtonText: 'OK',
      })
    }
  }

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
<div className='confirmation_container'>
        <div className='confirmation_success'>
            
        <img className='manage_img' src={Vector} alt="" />
        <h1>Check your mail</h1>
        <p className='confirmation-p'>We sent a password reset link to your email. 
          Please click the link to reset your password</p>

        <p className='checkmail-paragraph'>
          Don’t receive the email?{' '}
           <span className='checkmail-btn' onClick={handleResend}>Click to Resend link </span>
        </p>
        
        <button onClick={navigateToLogin}>Back to Login</button>

        
        </div>

        </div>


  )
}

export default CheckMail

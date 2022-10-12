import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from '../../Api/axios'
import logo from '../../img/logo.svg'
import logo1 from '../../img/logo1.svg'
// import '../SignUp/SignUp.css'
import '../../Pages/SignUp/SignUp.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
    setError('')
  }
  const handleLastName = (event) => {
    setLastName(event.target.value)
    setError('')
  }
  const handleUsername = (event) => {
    setUsername(event.target.value)
    setError('')
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
    setError('')
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
    setError('')
  }
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
    setError('')
  }
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
    setError('')
  }
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/users/register', {
        firstName,
        lastName,
        username,
        email,
        phoneNumber,
        password,
        confirmPassword,
      })
      localStorage.setItem('token', response.data.token)
      navigate('/confirmation')
    
    } catch (error) {
      console.log('ERROR', error)
     
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error,
      })
    }
  }

  return (
    <div className='signup_container'>
      <div className='signup_back'>
        <div className='signup_header'>
          <img src={logo} alt='airtime2cash-logo' />
        </div>

        <div className='signup_form'>
          <form onSubmit={handleSubmit}>
            {/* Go back */}
            <Link to='/'>
              {' '}
              <img className='signup_img-btn' src={logo1} alt='Go back' />
            </Link>
      
            
            <h3 className='signup_h2'>Create an account</h3>
            <div>
              <label htmlFor='firstName'>Firstname</label>
              <input
                type='text'
                name='firstName'
                placeholder='Enter your firstname'
                value={firstName}
                onChange={handleFirstName}
                required
              />
            </div>
            <div>
              <label htmlFor='lastName'>Lastname</label>
              <input
                type='text'
                name='lastName'
                placeholder='Enter your lastname'
                value={lastName}
                onChange={handleLastName}
                required
              />
            </div>
            <div>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                name='userName'
                placeholder='Enter your username'
                value={username}
                onChange={handleUsername}
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            <div>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input
                type='text'
                name='phoneNumber'
                placeholder='Enter your phone number'
                value={phoneNumber}
                onChange={handlePhoneNumber}
                required
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                value={password}
                required
                onChange={handlePassword}
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={handleConfirmPassword}
                required
              />
            </div>
            <button
              type='submit'
              // disabled={email === '' || password === '' ? true : ''}
              // disabled
              className='signup_btn'
            >
              Sign Up
            </button>

            <p className='signup_text'>
              Already have an account?{' '}
              <Link className='signup_anchor' to='/login'>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignUp

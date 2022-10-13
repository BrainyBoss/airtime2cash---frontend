import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../Api/axios'
import './Login.css'
import header from '../../Pages/Login/Asset/Frame 8589.svg'
import Swal from 'sweetalert2'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('wallet', response.data.User.wallet)
      Swal.fire({
        icon: 'success',
        title: 'Welcome...',
        text: response.data.message
      })
     if(response.data.User.role === false || response.data.User.role === 'user'){

      navigate('/dashboard')
    }else {
      navigate('/admin')
    }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:
          error.response.status === 404
            ? error.response.data.Error
            : error.response.data.message,
      })
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setError('')
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setError('')
  }

  return (
    <div className='login_container'>
      <div className='login_back'>
        <div className='login_header'>
        <Link to="/" > <img src={header} alt='logo' /></Link>
        </div>
          <h3 className='login_h3'>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              autoComplete='off'
              onChange={handleEmail}
              value={email}
              placeholder='Enter your email'
              required
            />
          </div>

          <div>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              autoComplete='off'
              onChange={handlePassword}
              value={password}
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='login_forgot'>
            <Link to='/forgetpassword' className='forgot'>Forgot password?</Link>
          </div>

          <button
            type='submit'
            disabled={email === '' || password === '' ? true : ''}
            className='login_btn'
          >
            Login
          </button>
          <p className='login_text'>
            Dont have an account?{' '}
            <Link to='/register' className='login_anchor'>
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

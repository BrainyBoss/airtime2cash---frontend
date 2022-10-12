import React from 'react';
import './App.css';
import CheckMail from './Pages/Checkmail/CheckMail';
import DashBoard from './Pages/DashBoard/DashBoard';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/SignUp/SignUp';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import Login from './Pages/Login/Login';
import {Routes, Route} from 'react-router-dom';
//import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword'
import RequireAuth from './Pages/Login/RequireAuth'
import Confirmation from './Pages/Confirmation/Confirmation'
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Admin from './Pages/Admin-page/Admin'
function App() {
  return (
    <Routes>
      <Route
        path='/update'
        element={
          <RequireAuth>
            <UpdateProfile />
          </RequireAuth>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignUp />} />
      <Route
        path='/dashboard'
        element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>
       }
      />
      <Route  path='/dashboard' element={<DashBoard />}/>
      <Route path='/' element={<LandingPage />} />
      <Route path='/checkmail' element={<CheckMail />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/forgot-password/:id' element={<ResetPassword />} />
      <Route path='/confirmation' element={<Confirmation />} />
    <Route path='/admin' element={<RequireAuth><Admin /></RequireAuth>} />
      <Route path='/transaction' element={<RequireAuth><Admin /></RequireAuth>} />
    </Routes>
  )
}

export default App

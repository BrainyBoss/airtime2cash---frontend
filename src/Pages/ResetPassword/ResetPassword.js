import React, { Component, useState }  from 'react';
import { Formik, Form } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import { TextInput } from "./Forms";
import logo from '../../Asset/icon/logo.svg'
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";

import './ResetPassword.css'
import axios from '../../Api/axios';
import { useParams } from 'react-router-dom';



const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  const navigate = useNavigate();
  let { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     const res = await axios.post(`/users/change-password/${id}`, {
        password,
        confirmPassword: cpassword
      })
          Swal.fire({
            title: 'success!',
            text: res.data.message,
            icon: 'success',
            confirmButtonText: 'OK'
          })
          navigate("/login");
        
      
    }
    catch (error) {

            Swal.fire({
            title: 'Error!',
            text: error.response.data.error,
            icon: 'error',
            confirmButtonText: 'OK'
          })
    
  }
  }
  return (
    <div className='login_container'>
     <div className='login_back'>
     <div className='login_header'>
     <Link to="/" > <img src={logo} alt='Airtime 2 Cash Logo' /></Link>
        <div><p>Password Reset</p>
        </div>
          
          <Formik
            initialValues={{
              newPassword: "",
              confirmNewPassword: "",
            }}
            validationSchema={Yup.object({
              newPassword: Yup.string()
                .min(
                  8,
                  "Password is too short - should be 8 characters minimum."
                )
                .max(
                  25,
                  "Password is too long - should be 25 characters maximum."
                )
                .required("Required"),
              confirmNewPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("newPassword")], "Passwords must match"),
            })}
        
          >
            {() => (
              <Form onSubmit={handleSubmit}>
                <TextInput
                  name="newPassword"
                  type="password"
                  label="New Password"
                  placeholder ="Enter New Password"
                  icon={<FiLock />}
                  value ={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />

                <TextInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder ="Confirm New Password"
                  // icon={<FiLock />}
                  value ={cpassword}
                  onChange={(e)=>setCPassword(e.target.value)}
                />

                <button type="submit" className='login_btn'>Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>

  );
};

export default ResetPassword;

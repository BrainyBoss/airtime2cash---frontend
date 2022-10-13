import React, { useState , useEffect} from 'react'
import Tabs from './Tab/Tabs';
import axios from '../../Api/axios';
import jwtDecode from 'jwt-decode';


import './Tab/Tabs.css'



const DashBoard = () => {
   const tabs = [
    'Sell airtime',
    'Withdraw balance',
    'Manage bank account',
    'Transaction history',
  ]
  const [active, setActive] = useState(tabs[0])
  const token = localStorage.getItem("token")
  const decoded = jwtDecode(token)
  async function getUser(){

    try {
      const res = await axios.get(`/users/getsingle/${decoded.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }
     
      );

      localStorage.setItem("id", res.data.user.id);
     localStorage.setItem("firstName", res.data.user.firstName);
      localStorage.setItem("lastName", res.data.user.lastName);
      localStorage.setItem("phoneNumber", res.data.user.phoneNumber);
      localStorage.setItem("avatar", res.data.user.avatar);
      localStorage.setItem("userName", res.data.user.userName);
    localStorage.setItem('wallet', res.data.user.wallet)
   
    } catch (error) {
    console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  

  return (
    <Tabs  />
  )
}

export default DashBoard




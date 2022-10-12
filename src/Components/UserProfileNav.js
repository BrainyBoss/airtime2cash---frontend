import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserImg from '../assets/images/user.jpeg'
import { FiChevronDown } from 'react-icons/fi';
import  ProfileIcon  from '../assets/icon/UserIcon.svg'
import  SettingsIcon  from '../assets/icon/settings.svg'
import  HelpIcon  from '../assets/icon/help.svg'
import  LogoutIcon  from '../assets/icon/logout.svg'
import { Link , useNavigate} from 'react-router-dom';
import jwtDecode from "jwt-decode";

import axios from '../Api/axios';


const UserProfileNav = ({setLogout, dashboard}) => {
  const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)

const [userDetails, setUserDetails] = useState([])
const avatar1 =localStorage.getItem("avatar")
const firstname1= localStorage.getItem("firstName")
const lastName1= localStorage.getItem("lastName")

async function getUser(){
  
  try {
    
    const res = await axios.get(`/users/getsingle/${decoded.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }
    );
      setUserDetails(res.data.user)
    } catch (error) {

    }
  }
  useEffect(() => {
    getUser()
  },[])
  const navigate = useNavigate()
  function logout(){
    localStorage.clear();
   navigate("/login");
  }

    const [showDropdown, setShowDropdown] = React.useState(false)
  return (
    <Profile >
         <Link to='/update'><img id="avatar-img" src={userDetails.avatar} alt="" /></Link>
        <span onClick={()=>setShowDropdown(!showDropdown)}>
        <span>{userDetails.firstName}</span>
        {dashboard && <>
       <FiChevronDown />
        <Dropdown showDropdown={showDropdown}>
        <Link to='/update'><DropdownItem>  <img  className="avatar1" src={userDetails.avatar} alt="" /> <span>Account</span> </DropdownItem></Link>
            <DropdownItem>  <img src={SettingsIcon} alt="" /> <span>Settings</span> </DropdownItem>
            <DropdownItem>  <img src={HelpIcon} alt="" /> <span>Help Center</span> </DropdownItem>
            <DropdownItem onClick={logout}>  <img src={LogoutIcon} alt="" /> <span>Logout</span> </DropdownItem>
        </Dropdown></>}
        </span>
    </Profile>
  )
}

export default UserProfileNav
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
    & img {
        width: 36px;
        border-radius: 50%;
        height: 40px
    }
    @media(max-width: 1024){
  width:10px;
}
`
const Dropdown = styled.div`
    position: absolute;
    right: 10%;
    background-color: #fff;
    width: 226px;
    height: 250px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 100;
    display: ${({showDropdown})=>(showDropdown ? 'block' : 'none')};
    transition: all 0.3s ease-in-out;  
    &.active {
        display: block;
    }
`
const DropdownItem = styled.div`
display: flex;
align-items: center;
gap: 15px;
color: #21334F;
font-weight: lighter;
margin: 15px 20px;
 & img {
        width: 24px;
 }
`

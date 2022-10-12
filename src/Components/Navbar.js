import React from 'react'
import logo from '../assets/icon/logo2.svg'
// import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import {Wrapper, Nav, Logo,Hamburger,Menu,MenuLinks,LogoWrapper } from '../styles/LandingPageStyle'
import StyleButton from '../styles/Button.styles.js'
import UserProfileNav from './UserProfileNav'
import { Link } from 'react-router-dom'

export const Navbar=({landing, dashboard})=> {
  const token = localStorage.getItem("token")

    const [open, setOpen] = useState(false) 
    const [isLogin, setIsLogin] = useState(false)
  return ( 
    <Wrapper>
      <Nav>
        {/* <LogoWrapper> */}
        <a href='/dashboard'><Logo id="mainlog" src={logo} alt="" /></a>
   
    {landing && 
    <Hamburger onClick={()=> setOpen(!open)}>
        <span />
        <span />
        <span />
    </Hamburger> }
          {dashboard && <UserProfileNav dashboard setLogout={setIsLogin} />}
            {/* </LogoWrapper> */}

        {landing && <Menu open={open}>
    {!token ? (<>

          <MenuLinks onClick={()=> setOpen(!open)}><a href='/'>Home</a></MenuLinks>
         <MenuLinks onClick={()=> setOpen(!open)}><a  href='/#about'>About Us</a></MenuLinks>
        <MenuLinks onClick={()=> setOpen(!open)}><a href='/#product'>Products</a></MenuLinks>
        <MenuLinks onClick={()=> setOpen(!open)}><a href='/#contactUs'>Contact Us</a></MenuLinks>
        <StyleButton onClick={() => setIsLogin(true)} width='20%'><Link to="/login">Login</Link></StyleButton>
    </>) : "" }
          
        
        </Menu>
        }
      
      
    </Nav>
    </Wrapper>

  )
}


// activeClassName="active" 
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import './sidebar.css'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  let activeStyle = {
    background: '#de3d6d',
    color: 'white',
  }

  let activeClassName = 'isActive'
  const menuItem = [
    {
      path: '/admin',
      name: 'Overview',
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      path: '/transaction',
      name: 'Transactions',
      icon: <BiTransfer />,
    },
  ]
  return (
    <div className='admin-sidebar_container'>
      <div
        style={{ width: isOpen ? '302px' : '50px' }}
        className='admin_sidebar'
      >
        <div className='admin_top_section'>
          <div
            style={{ marginLeft: isOpen ? '50px' : '0px' }}
            className='admin_arrow'
          >
            <AiOutlineArrowLeft onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='admin_link'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div className='admin_icon'>{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className='admin_link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar

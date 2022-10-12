<<<<<<< HEAD
import React, { useState } from 'react'
import './Tabs.css'
// import FirstTab from '../FirstTab/FirstTab'
=======
import React, { useEffect, useState } from 'react'
import './Tabs.css'
// import FirstTab from "../FirstTab/FirstTab";
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
import SellAirtimeForm from '../FirstTab/SellAirtimeFolder/SellAirtimeForm'
import SecondTab from '../SecondTab/SecondTab'
import ThirdTab from '../ThirdTab/ThirdTab'
import ForthTab from '../ForthTab/ForthTab'
<<<<<<< HEAD
=======
import FifthTab from '../FifthTab/FifthTab'
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
import TabContent from '../TabContent'
import TabNavItem from '../TabNavItem'
import { DashboardStyle } from '../dashboardStyle'
import { Navbar } from '../../../Components/Navbar'
<<<<<<< HEAD

const Tabs = ({}) => {
  const [activeTab, setActiveTab] = useState('tab1')
  const tabs = [
    'Transfer airtime',
    'Withdraw balance',
    'Manage bank account',
    'Transaction history',
  ]

  console.log('ACTIVE', activeTab)
  // testing = activeTab
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1')
  }
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2')
  }

=======
import axios from '../../../Api/axios'
import jwtDecode from 'jwt-decode'

const Tabs = ({}) => {
  const [activeTab, setActiveTab] = useState('tab1')
  const [userDetails, setUserDetails] = useState([])
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)
  async function getUser() {
    try {
      const res = await axios.get(`/users/getsingle/${decoded.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUserDetails(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  console.log('USER DETAILS', userDetails)
  const amt = localStorage.getItem('wallet')
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
  return (
    <div style={{ background: 'red' }}>
      <Navbar dashboard />
      <DashboardStyle>
        <div className='generaldiv'>
          <div className='topPage'></div>
          <div className='mainPage' style={{ backgroundColor: 'white' }}>
            <h1 className='headText'>
              {activeTab === 'tab1' || activeTab === 'tab2'
                ? 'Dashboard'
                : activeTab === 'tab3'
                ? 'Manage Bank'
                : 'Transaction'}
            </h1>
            {activeTab === 'tab1' || activeTab === 'tab2' ? (
              <div className='balance-wrapper2'>
                <div className='balance2'>
                  <p className='text2'>Wallet Balance</p>
<<<<<<< HEAD
                  <p className='acct-bal2'>N21,350.00</p>
=======
                  <p className='acct-bal2'>
                    <span>&#8358;</span>
                    {userDetails?.data?.user?.wallet}
                  </p>
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
                  <button>Active is active</button>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className='Tabs'>
              <ul className='nav'>
                <TabNavItem
<<<<<<< HEAD
                  title='Transfer airtime'
=======
                  title='Sell airtime'
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
                  id='tab1'
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title='Withdraw balance'
                  id='tab2'
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title='Manage bank account'
                  id='tab3'
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title='Transaction history'
                  id='tab4'
<<<<<<< HEAD
=======
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title='Withdrawer history'
                  id='tab5'
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>

              <div className='outlet'>
                <TabContent id='tab1' activeTab={activeTab}>
<<<<<<< HEAD
                  {/* <FirstTab /> */} {<SellAirtimeForm />}
=======
                  {/* <FirstTab /> */}
                  <SellAirtimeForm />
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
                </TabContent>
                <TabContent id='tab2' activeTab={activeTab}>
                  {/* <SecondTab/> */}
                  <SecondTab />
                </TabContent>
                <TabContent id='tab3' activeTab={activeTab}>
                  <ThirdTab />
                </TabContent>
                <TabContent id='tab4' activeTab={activeTab}>
                  <ForthTab />
                </TabContent>
                <TabContent id='tab5' activeTab={activeTab}>
                  <FifthTab />
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </DashboardStyle>
    </div>
  )
}
export default Tabs

import React, { useEffect, useState } from 'react'
import './Tabs.css'
// import FirstTab from "../FirstTab/FirstTab";
import SellAirtimeForm from '../FirstTab/SellAirtimeFolder/SellAirtimeForm'
import SecondTab from '../SecondTab/SecondTab'
import ThirdTab from '../ThirdTab/ThirdTab'
import ForthTab from '../ForthTab/ForthTab'
import FifthTab from '../FifthTab/FifthTab'
import TabContent from '../TabContent'
import TabNavItem from '../TabNavItem'
import { DashboardStyle } from '../dashboardStyle'
import { Navbar } from '../../../Components/Navbar'
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
                  <p className='acct-bal2'>
                    <span>&#8358;</span>
                    {userDetails?.data?.user?.wallet}
                  </p>
                  <button>Active is active</button>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className='Tabs'>
              <ul className='nav'>
                <TabNavItem
                  title='Sell airtime'
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
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title='Withdrawer history'
                  id='tab5'
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>

              <div className='outlet'>
                <TabContent id='tab1' activeTab={activeTab}>
                  {/* <FirstTab /> */}
                  <SellAirtimeForm />
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

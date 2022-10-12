import React from 'react';
// import './App.css';
import Sidebar from '../../Components/Admin-Dashboard/Sidebar/Sidebar';
import Overview from '../../Components/Admin-Dashboard/Overview/Overview';
import Transactions from '../../Components/Admin-Dashboard/Transaction/Transactions';
import { Navbar } from "../../Components/Navbar";

const Admin = () => {
  const adminPath = window.location.href.split("/").pop()
  return (
    <div>
      <Navbar dashboard/>
    <Sidebar>
      {adminPath === 'admin' && <Overview />}
      {adminPath === 'transaction' && <Transactions />}    
    </Sidebar>
    </div>
  );
};

export default Admin;
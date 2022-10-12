import React from 'react';
import {useState, useEffect } from "react";
import '../Overview/overview.css'
import axios from '../../../Api/axios';

const Transactions = () => {

const [table, setTable] = useState([])

  useEffect(()=>{
    axios.get('/airtime/allTransactions/pending')
    .then(res => setTable(res.data))
    .catch(error => {
      console.log(error)
    })
  },[])
   
    return (
        <div className='container_asm'>
            <div className='admin_main-content'>
            <div className='admin_bg'>
            <h1>Transactions</h1>
            <table cellSpacing={0}>
                <tr>
                    <th>Phone Number</th>
                    <th>Amount sent</th>
                    <th>Amount Received</th>
                    <th>Network</th>
                    <th>Status</th>
                </tr>

        {table.content && table.content.length > 0 ? (
          table.content.map((item, index) => (
            <tr>
              <td>{item.phoneNumber}</td>
              <td>{item.amountToSell}</td>
              <td>{item.amountToReceive}</td>
              <td>{item.network}</td>
              <td>{item.transactionStatus}</td>
            </tr>
          ))
        ) : (
          <p>No data to display</p>
        )}
      </table>
           
            </div>
            </div>
            
        </div>
    );
};

export default Transactions;
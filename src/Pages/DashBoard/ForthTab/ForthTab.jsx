import React, { useEffect, useState } from "react";
import "./ForthTab.css";
import axios from "../../../Api/axios";
import jwtDecode from "jwt-decode";

export const ForthTab = () => {

const [transactionHistory, setTransactionHistory] = useState([]);

  const token = localStorage.getItem("token");
   const decoded = jwtDecode(token)
  const getTransactionHistory = async () => {
    try {
      const res = await axios.get(`/airtime/singleTransaction/${decoded.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("fff",res.data.data.rows)
      setTransactionHistory(res.data.data.rows)

    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getTransactionHistory();
  }, []);


 return (
   <div id="transaction-historytab" className="transaction-historytab">
     {transactionHistory && transactionHistory.length > 0 ? transactionHistory.map((oneHistory) => {
       return (
      <div className="general1">
        <div className="details-history">
          <p id="date-text"><strong>{new Date(oneHistory.createdAt).toLocaleDateString('en-US', {
                            weekday: 'long'})}</strong>, {new Date(oneHistory.createdAt).toLocaleTimeString('en-US', {
                                hour: '2-digit', minute:'2-digit'
                            })}</p>
          <p id="withdraw-text">{oneHistory.network}</p>
          <p id="withdraw-text">{new Date(oneHistory.createdAt).toLocaleDateString().slice(0, 10)}</p>
        </div>
        <div className="btn6">
          <div id="received"><p>{oneHistory.transactionStatus}</p></div>
          <p className="naira">N{oneHistory.amountToSell}</p>
        </div>
      </div>
    
   
      )
        }).reverse() : <p>No transaction made</p>
      }
      
    </div>
  );
};

export default ForthTab;

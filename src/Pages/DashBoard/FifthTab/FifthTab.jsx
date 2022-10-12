import React, { useEffect, useState } from "react";
import "../ForthTab/ForthTab.css";
import axios from "../../../Api/axios";
export const FifthTab = () => {


 const [withdraw, setWithdraw] = useState([]);

  const token = localStorage.getItem("token");
  const getUserWithdawalHistory = async () => {
    try {
      const res = await axios.get(`/cash/getAllUserWithdrawals`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      let data1 = res.data
      let sorted = data1.reverse()
      
    
      setWithdraw(sorted)

      console.log(sorted)

    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getUserWithdawalHistory();
  }, []);
  // console.log(withdraw);

  return (
    <div id="transaction-historytab">
      {withdraw && withdraw.length> 0 ?
        withdraw.map((oneWithdraw) => {
          return (
            <div className="general1">
        <div className="details-history">
          <p id="date-text">
            <strong>{new Date(oneWithdraw.createdAt).toLocaleDateString('en-US', {
                            weekday: 'long'})}</strong>, {new Date(oneWithdraw.createdAt).toLocaleTimeString('en-US', {
                                hour: '2-digit', minute:'2-digit'
                            })}
          </p>
          <p id="withdraw-text">Withdraw fund</p>
                <p id="withdraw-text">{new Date(oneWithdraw.createdAt).toLocaleDateString().slice(0, 10)}</p>
        </div>
        <div className="btn6">
          <button id="received"><p>Received</p></button>
          <p className="naira">N{oneWithdraw.amount}</p>
        </div>
      </div>
          )
        })
        : <p>No Withdrawer made</p>
      }
      
    
    </div>
  );

 
};

export default FifthTab;

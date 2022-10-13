import React from "react";
import { useState, useEffect } from "react";
import "../Overview/overview.css";
import axios from "../../../Api/axios";

const Transactions = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios
      .get("/airtime/allTransactions")
      .then((res) => {
        // console.log(res)
        setTable(res.data.transactions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container_asm">
      <div className="admin_main-content">
        <div className="admin_bg">
          <h1>Transactions</h1>
          <table cellSpacing={0}>
            <tr>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Amount sent</th>
              <th>Amount Received</th>
              <th>Network</th>
              <th>Status</th>
            </tr>

            {table && table.length > 0 ? (
              table
                .map((item, index) => (
                  <tr>
                    {" "}
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.amountToSell}</td>
                    <td>{item.amountToReceive}</td>
                    <td>{item.network}</td>
                    <td>{item.transactionStatus}</td>
                  </tr>
                ))
                .reverse()
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

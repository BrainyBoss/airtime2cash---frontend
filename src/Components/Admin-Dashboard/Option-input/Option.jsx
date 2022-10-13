import React, { useEffect } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "../../../Api/axios";
import "./option.css";
import Swal from "sweetalert2";

function Option({ closeModal, setId2, setTransactionsid ,shutdownmodal}) {
  const [amount, setAmount] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [secondToken, setSecondToken] = useState('')
  
  const email = userDetails.email;

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  async function getUser() {
    try {
      const res = await axios.get(`/users/getsingle/${decoded.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(res.data.user.transactionId)
      setUserDetails(res.data.user);
    
    } catch (error) {}
  }
  useEffect(() => {
    getUser();
  }, []);

  function handleToken(e){
    setSecondToken(e.target.value)
  }

  function handleEdit(e) {
    setAmount(e.target.value);
  }


  const calcReceive = `${parseFloat(parseInt(amount * 0.7).toFixed(4))}`;

  const close = () => {
    closeModal(false);
  };

  const handleCancel = async () => {
    try {
      const response = await axios.patch(
        "/account/cancelsingletransaction/" + setId2,
        {
          email, 
          // amount: calcReceive,
          transactionId: setTransactionsid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
       console.log("successjjj", response);
     

      close();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: 'Succesfully cancelled transaction',
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(localStorage.getItem('otp') !== secondToken){
      Swal.fire({
        icon: "error",
        title: "oops!",
        text: "invalid otp",
      });
      return 0
    }

    try {
     
      const response = await axios.patch(
        `/users/updatewallet/${setId2}`,
        {
          email,
          amount: calcReceive,
          transactionId: setTransactionsid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      close();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.msg,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
   
      <div className="option-modal-bg">
        
        <div className="option_background">
          <h1 className="clt" onClick={()=> close()} >X</h1>
          <h4 className="option_h4">Enter an amount</h4>
          <form onSubmit={handleSubmit}>
            <div className="option_input_wrapper">
              <label>Amount sent</label>
              <input
                className="option_input "
                type="number"
                value={amount}
                onChange={handleEdit}
                required
              />
            </div>
            <div className="option_input_wrapper">
              <label>Amount received</label>
              <input
                className="option_input option_bgcolor"
                type="number"
                value={calcReceive}
                readOnly
              />
            </div>

            <div className="option_input_wrapper">
              <label>Enter Token</label>
              <input
                className="option_input"
                type="number"
                value={secondToken} 
                onChange={handleToken}
              />
            </div>
            <button
              type="submit"
              className="option_button"
              onClick={() => handleSubmit}
            >
              Confirm
            </button>
            <button className="option_button" onClick={handleCancel}>
              Cancel Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Option;

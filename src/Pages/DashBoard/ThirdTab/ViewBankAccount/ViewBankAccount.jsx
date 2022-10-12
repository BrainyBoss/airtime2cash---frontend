import React, {useState, useEffect} from "react";
import axios from "../../../../Api/axios";
import "./ViewAccount.css";
import RemoveModal from "./RemoveModal";


const ViewBankAccount = ({handleBankCreate}) => {

  const [getAccounts, setGetAccounts] = useState([])
  const token = localStorage.getItem("token");
  const [reFresh, setReFresh] = useState(true)

  const [modal, setModal] = useState(false);
  //  const [modalIsOpen, setModalIsOpen] = useState(false)
  const getAccount = async (e) =>{
    try {
      const response = await axios.get('/account/getaccount', 
      {
        headers: { Authorization: `Bearer ${token}` 
      },
      })
      setGetAccounts(response.data.data)
      
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getAccount()
  }, [reFresh])

  console.log({getAccounts})


// function closeModal() {
//     setModalIsOpen(false);
//   }
  const deleteAccount = async(id) =>{
    try {
      const response = await axios.delete(`/account/deleteaccount/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
      })
      console.log(response)
      setReFresh(!reFresh)
    } catch (error) {
      console.log(error)
      
    }
  }
   const toggleModal = () => {
    setModal(true);
  };
  


  return (
    <div className="container">
      <div className="dashboard_frame">
        <div className="headerContainer">
          <h4 className="header">Bank Accounts</h4>
          
        </div>

        {getAccounts && getAccounts.length > 0 ? getAccounts.map((item, index) => (
          <div key={index} className="single_account">
            <div className="details">
              <p className="bank-name">{item.bankName}</p>
              <p className="bank_account">{item.accountName}</p>
              <p className="account_name">{item.accountNumber}</p>
            </div>
            <div className="btn_container">
             <span onClick={toggleModal} className="remove_btn">Remove</span>
          
              {modal && <RemoveModal id={item.id}  delete1={deleteAccount} closeModal={setModal} />}
            </div>
          </div>
        )) : <p>No Existing Account</p>}
      </div>
      <button className="viewbank_btn" onClick={handleBankCreate}>Add New Bank</button>
    </div>
  )
};

export default ViewBankAccount;

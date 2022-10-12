import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "../../../Api/axios";
import { useState } from "react";
import Select from "react-select";
import { banks } from "./data";
import Successful from "./Successful/Successful";
import Swal from "sweetalert2";
import "./manageCard.css";
import ViewBankAccount from "./ViewBankAccount/ViewBankAccount";

function ThirdTab() {
  const [selectedOption, setSelectedOption] = useState("null");
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const divParent = useRef();
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem("token");

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "black",
      padding: 10,
      fontSize: 14,
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      height: "39.5px",
      padding: "0 5px",
    }),

    control: (provided, state) => ({
      ...provided,
      marginBottom: 7,
      marginTop: 9,
      "&:hover": { bordeColor: "none" },
      boxShadow: 0,
      fontSize: 13,
    }),
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  function handleName(e) {
    setName(e.target.value);
  }

  function handleNumber(e) {
    setAccountNumber(e.target.value);
  }

  const toggleModal = () => {
    setModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/account/createaccount",
        {
          bankName: selectedOption.label,
          accountName: name,
          accountNumber: accountNumber,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toggleModal();

      setSelectedOption("")
      setName("")
      setAccountNumber("")

    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response.status === 409
            ? error.response.data.msg
            : error.response.data.message,
      });
    }
  };
  const [bankList, setBankList] = useState(false);

  const handleBankListPage = () => {
    setBankList(true);
  };

  const handleBankCreate = () => {
    setBankList(false);
  };

  return (
    <div className="management">
      {bankList ? (
        <ViewBankAccount handleBankCreate={handleBankCreate} />
      ) : (
        <div className="manage_container">
          <div className="manage_container_header">
            <h3 className="manage_header">Bank Account</h3>
            <div onClick={handleBankListPage} className="manage_view">
              View Bank accounts
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div ref={divParent}>
              <label htmlFor="" className="manage_label">
                Bank Name
              </label>
              <Select
                className="manage_input"
                styles={customStyles}
                menuPortalTarget={divParent.current}
                autoComplete="off"
                value={selectedOption}
                onChange={handleChange}
                options={banks}
                placeholder="Select bank"
              />
            </div>

            <div className="manage_space">
              <label className="manage_label">Account Name</label>
              <input
                className="manage_input"
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Account name"
                required
              />
            </div>

            <div>
              <label className="manage_label">Account Number</label>
              <input
                className="manage_input"
                type="text"
                value={accountNumber}
                onChange={handleNumber}
                placeholder="Account number"
                required
              />
            </div>

            <button type="submit" className="manage_btn">
              Add Bank
            </button>
          </form>
        </div>
      )}

      {modal && <Successful closeModal={setModal} />}
    </div>
  );
}

export default ThirdTab;

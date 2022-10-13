import React, { useState } from "react";
import { WithdrawStyle, CustomStyle } from "./WithdrawStyle";
import SecondTabStyle from "./SecondTab.style";
import InputField from "./FormInput";
import { Label } from "./SellAirtimeFormStyle";
import Select from "react-select";
import { useEffect } from "react";
import { withdrawBalance } from "../../../Api/auth";
import axios from "axios";

const SecondTab = () => {
  const [banks, setBanks] = useState([]);
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});

  const getUserBanks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:4000/account/getaccount",
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      setBanks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('details',banks)
  useEffect(() => {
    getUserBanks();
  }, []);
  const bankOptions = banks?.map((bank) => {
    return {
      value: bank.bankName,
      label: `${bank.bankName} - ${bank.accountNumber}`,
      bank: bank,
    };
  });
  const handleChange = (selectedOption) => {
    setFormData({
      ...formData,
      accountName: selectedOption.bank.accountName,
      accountNumber: selectedOption.bank.accountNumber,
      bankName: selectedOption.bank.bankName,
    });
  };
  const bankName = formData.bankName;
  const accountNumber = formData.accountNumber;
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let amount = data.amount;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await withdrawBalance({ accountNumber, bankName, amount });
    // window.location.reload();
    //  setFormData("")
    // setBanks("")
    // amount= ""
   

  };
  return (
    <>
      <SecondTabStyle>
   <h6 className='sellAirtime_h3' id="trans">Withdraw</h6>
   
        <form className="form-container">
          <label htmlFor="Network">Select Account</label>
          <Select
          id="input99"
            className="selections"
            styles={CustomStyle}
            onChange={handleChange}
            options={bankOptions}
            placeholder="Select Account"
            name="bankName"
            value={formData.label}
          />
          <Label>
            <InputField
              type="input"
              className="input"
              label="Account Name"
              placeholder="BabatundeOla"
              name="account_name"
              //change={(e) => setphoneNumber(e.target.value)}
              value={formData.accountName}
            />
            <InputField
              type="input"
              className="input"
              label="Account Number"
              placeholder="1234567890"
              name="accountNumber"
              //change={(e) => setphoneNumber(e.target.value)}
              value={formData.accountNumber}
            />
            <InputField
              type="input"
              className="input"
              label="Amount"
              placeholder="NGN"
              name="amount"
              change={handleChange2}
              value={amount}
            />
            <InputField
              type="password"
              className="input"
              label="Password"
              name="password"
              change={handleChange2}
              //value={formData.accountNumber}
            />
          </Label>
          <button  id="btn11" type="submit" className="btnnn"   setBanks={banks}
          setFormData={formData}
          onClick={handleSubmit}>
            Withdraw
          </button>
        </form>
      </SecondTabStyle>
    </>
  );
};
export default SecondTab;

import React from 'react';
//import { useState } from 'react';
import './WithdrawBalance.styles'
import { WithdrawStyle } from './WithdrawBalance.styles';
import Button from '../sellAirtime/common/Button';

const WithdrawBalanceForm = () => {
    // const [inputs, setInputs] = useState({
    //     selectAccount: "", accountName: "", accountNumber: "", amount: "", password: ""
    // })
    return (
        <>
        <div>
            <WithdrawStyle>
                <div className='containerBody'>
                    <p className='Whead'>Withdraw</p>
                        <form className='wrap'>
                            <div className='form-wrapper'>
                                <label>Select Account</label><br/>
                                <select
                                    type='text'
                                    name= 'selectAccount'
                                    required>
                                    <option name='Select' placeholder='Select'>Select</option> 
                                    <option>Access Bank</option>
                                    <option>Citi Bank</option>
                                    <option>GT Bank</option>
                                    <option>Ecobank</option>
                                    <option>FCMB</option>
                                    <option>Fidelity Bank</option>
                                    <option>First Bank</option>
                                    <option>Heritage Bank</option>
                                    <option>Jaiz Bank</option>
                                    <option>Keystone Bank</option>
                                    <option>Parallex Bank</option>
                                    <option>Providus Bank</option>
                                    <option>Skye Bank</option>
                                    <option>Stanbic IBTC Bank</option>
                                    <option>Standard Chartered Bank</option>
                                    <option>Sterling Bank</option>
                                    <option>UBA</option>
                                    <option>Union Bank</option>
                                    <option>United Bank for Africa</option>
                                    <option>Unity Bank</option>
                                    <option>Wema Bank</option>
                                    <option>Zenith Bank</option>
                                </select>
                            </div>
                            <div>
                                <label>Account Name</label><br/>
                                <input className='form-input'
                                type='text'
                                placeholder='BabatundeOla'
                                name= 'accountName'
                                required/>
                            </div>
                            <div>
                                <label>Account Number</label><br/>
                                <input className='form-input'
                                type='text'
                                placeholder='2987665533'
                                name= 'accountNumber'
                                required/>
                            </div>
                            <div>
                                <label>Amount</label><br/>
                                <input className='form-entry'
                                type='text'
                                placeholder='NGN'
                                name= 'amount'
                                required/>
                            </div>
                            <div>
                                <label>Password</label><br/>
                                <input className='form-entry'
                                type='text'
                                placeholder='Password'
                                name= 'password'
                                style={{marginBottom:'30px'}}
                                required/>
                            </div>

                            <Button
                                type="submit"
                                height={"48px"}
                                width={"198px"}
                                text={"Withdraw"}/>
                        </form>

                </div>
            </WithdrawStyle>
        </div>
        </>
    )
}
export default WithdrawBalanceForm;
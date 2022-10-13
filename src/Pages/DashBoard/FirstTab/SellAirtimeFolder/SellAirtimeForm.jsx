import React, { useEffect, useState } from 'react'
import {
  CustomStyle,
  Label,
} from './SellAirtimeFormStyle'
import copy from './copy.svg'
import Select, { StylesConfig } from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputField from './Input'
import { postSellAirtime } from './auth'
import FirstTabStyle from '../FirstTab.style'
import Swal from 'sweetalert2'

const SellAirtimeForm = ({ ...props }) => {
  const [network, setNetwork] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [airtimeAmount, setamountToSell] = useState('')
  const [ussd, setussd] = useState('')
  const [pin, setPin] = useState('')
  const [destinationPhoneNumber, setdestinationPhoneNumber] = useState('')
  const [modal, setModal] = useState(false)

  useEffect(() => {
    console.log(network)
    if (network === 'MTN') {
      setussd(`*600*08131338486*${airtimeAmount}*${pin}#`)
      setdestinationPhoneNumber('08131338486')
    }
    if (network === 'Glo') {
      setussd(`*131*09154291928*${airtimeAmount}*${pin}#`)
      setdestinationPhoneNumber('09154291928')
    }
    if (network === 'Airtel') {
      setussd(`*432*07019655163*${airtimeAmount}*${pin}#`)
      setdestinationPhoneNumber('07019655163')
    }
    if (network === '9mobile') {
      setussd(`*223*${pin}*${airtimeAmount}*09092000192#`)
      setdestinationPhoneNumber('09092000192')
    }
  }, [network, pin, airtimeAmount])

  const sellAirtime = async (network, phoneNumber, airtimeAmount, ussd) => {
    if (
      network === '' ||
      phoneNumber === '' ||
      airtimeAmount === '' ||
      ussd === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no field should be left empty',
      })
    } else {
      const amountToSell = airtimeAmount
      try {
        const res = await postSellAirtime({
          network,
          phoneNumber,
          amountToSell,
        })
        console.log("CHECKING", res)
    if(res.status){
           Swal.fire({
            icon: 'success',
            title: 'Success',
            text: "your request  has been sent to Admin",
          })
        }
        if (res.response.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res.response.data.Error,
          })
        } 
        
        console.log("CHECKING4", res.response.status)
      
        console.log('success')
       
          
      } catch (error) {
        toast.error(error)
        console.log(error)
      }
        
    }
  }
  async function copyTextToClipboard(e) {
    e.preventDefault()
    navigator.clipboard.writeText(ussd)
  }

  async function copyTextToClipboard1(e) {
    e.preventDefault()
    navigator.clipboard.writeText(destinationPhoneNumber)
    toast("copied to clipbord")
  }
  const networkProviders = [
    { value: 'MTN', label: 'MTN' },
    { value: 'Glo', label: 'Glo' },
    { value: 'Airtel', label: 'Airtel' },
    { value: '9mobile', label: '9mobile' },
  ]

  const HandleChange = (selectedOption) => {
    setNetwork(selectedOption.value)
  }

  // const calcReceive = `NGN ${parseFloat(parseInt(airtimeAmount) * 0.7)}`
  const calcReceive = `NGN ${parseFloat(
    parseInt(airtimeAmount * 0.7).toFixed(2)
  )}`
  const handleSubmit = (e) => {
    e.preventDefault()
    sellAirtime(
      network,
      phoneNumber,
      airtimeAmount,
      ussd,
      destinationPhoneNumber
    )
    setphoneNumber("")
    setNetwork("")
    setPin("")
    setamountToSell("")
 
  }



  return (
    <FirstTabStyle>
      <h6 className='sellAirtime_h3' id='trans'>
        Transfer Airtime
      </h6>
      <div className='sellAirtime_main_body'>
        <div className='sellAirtime_body_layout'>
          <form action='' className='form-container'>
       

            <label htmlFor=''>Network</label>
            <Select
              id='input99'
              styles={CustomStyle}
              onChange={HandleChange}
              // options={networkProvidersOptions}
              options={networkProviders}
              placeholder='Select Network'
              name='network'
         
            />
            <Label>
              <InputField
                type='input'
                className='input'
                label='Phone Number'
                placeholder='Phone Number'
                name='phoneNumber'
                change={(e) => setphoneNumber(e.target.value)}
                value={phoneNumber}
                required
              />
              <InputField
                type='input'
                className='input'
                label='Amount to Sell'
                placeholder='NGN'
                name='airtimeAmount'
                change={(e) => setamountToSell(e.target.value)}
                value={airtimeAmount}
                required
              />
              <InputField
                type='text'
                className='input'
                label='Pin'
                placeholder='pin'
                change={(e) => setPin(e.target.value)}
                
                readOnly
              />
              <div className='ussdContainer'>
                <InputField
                  type='text'
                  style={{ backgroundColor: '#F5F5F5' }}
                  label='USSD'
                  placeholder={'*780*{amount}*09088756433*5000#'}
                  name='ussd'
                 
                  value={ussd}
                  readOnly
                />
                <span className='btn0' onClick={copyTextToClipboard}>
                  <img src={copy} alt='copy' />
                </span>
              </div>
              <InputField
                type='input'
                style={{ backgroundColor: '#F5F5F5' }}
                label='Amount to Receive'
                placeholder='NGN'
                name='amountToReceive'
                //change={(e) => setamountToReceive(e.target.value)}
                value={calcReceive}
                readOnly
              />
              <div className='ussdContainer'>
                <InputField
                  type='input'
                  style={{ backgroundColor: '#F5F5F5' }}
                  label='Destination Phone Number'
                  placeholder='Destination Phone Number'
                  name='destinationPhoneNumber'
                  // change={(e) => setdestinationPhoneNumber(e.target.value)}
                  value={destinationPhoneNumber}
                  readOnly
                />{' '}
                <span className='btn0' onClick={copyTextToClipboard1}>
                  <img src={copy} alt='copy' />
                </span>
              </div>
              <p className='clkdecs'>
                After transferring the airtime, click on the "Send” button below
              </p>
            </Label>

            <button
              // disabled={phoneNumber === '' || airtimeAmount === '' ? true : ''}
              id='btn11'
              type='submit'
              className='btnnn'
              onClick={handleSubmit}
            >
              Sent, Notify Admin
            </button>
          </form>

          <ToastContainer />
        </div>
      </div>
    </FirstTabStyle>
  )
}
export default SellAirtimeForm


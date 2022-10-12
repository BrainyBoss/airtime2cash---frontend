<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
import {
  SellAirtimeFormStyle,
  CustomStyle,
  Label,
  ModalPopupStyle,
} from './SellAirtimeFormStyle'
<<<<<<< HEAD
import Select from 'react-select'
import { networkProvidersOptions } from './networkproviders'
=======
import copy from './copy.svg'
import Select, { StylesConfig } from 'react-select'
// import { networkProvidersOptions } from './networkproviders'
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputField from './Input'
import { postSellAirtime } from './auth'
<<<<<<< HEAD

const SellAirtimeForm = ({ ...props }) => {
  const [networkName, setNetwork] = useState({})
  const [network, setNetworkName] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [airtimeAmount, setamountToSell] = useState('')
  const [ussd, setussd] = useState('')
  const [destinationPhoneNumber, setdestinationPhoneNumber] = useState('')
  const [modal, setModal] = useState(false)

  const sellAirtime = async (
    network,
    phoneNumber,
    airtimeAmount,
    ussd,
    destinationPhoneNumber
  ) => {
    try {
      // eslint-disable-next-line no-useless-escape

      if (
        network === '' ||
        phoneNumber === '' ||
        airtimeAmount === '' ||
        ussd === ''
      ) {
        return toast.error(
          'No field should be left empty, please fill all fields'
        )
      }
      const amountToSell = airtimeAmount
      postSellAirtime({
        network,
        phoneNumber,
        amountToSell,
      })
      toast.success('Airtime successfully sold')
    } catch (error) {
      toast.error(error)
    }
  }

  const handleChange = (selectedOption) => {
    setNetwork(selectedOption.value)
    // setNetworkName(network.name);
    // setussd(network.ussd);
    // setdestinationPhoneNumber(network.number);
    // console.log(selectedOption.value.name, networkProvidersOptions[0].label)
    networkProvidersOptions.forEach((el) => {
      if (selectedOption.value.name === el.label) {
        setNetworkName(el.label)
        setussd(el.value.ussd)
        setdestinationPhoneNumber(el.value.number)
        navigator.clipboard.writeText(ussd)
      }
    })
=======
import FirstTabStyle from '../FirstTab.style'
import Swal from 'sweetalert2'

const SellAirtimeForm = ({ ...props }) => {
  // const [networkName, setNetwork] = useState({})
  const [network, setNetwork] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [airtimeAmount, setamountToSell] = useState('')
  const [ussd, setussd] = useState('')
  const [pin, setPin] = useState('')
  const [destinationPhoneNumber, setdestinationPhoneNumber] = useState('')
  const [modal, setModal] = useState(false)
  // let toggleModal
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
        console.log(res)

        Swal.fire({
          icon: 'success',
          title: 'Admin has been notified,.',
          text: ' Your wallet would be credited soon',
        })
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
  }
  const networkProviders = [
    { value: 'MTN', label: 'MTN' },
    { value: 'Glo', label: 'Glo' },
    { value: 'Airtel', label: 'Airtel' },
    { value: '9mobile', label: '9mobile' },
  ]

  const HandleChange = (selectedOption) => {
    setNetwork(selectedOption.value)
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
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
<<<<<<< HEAD
    console.log(sellAirtime)
    toggleModal(e)
  }
  const toggleModal = (e) => {
    e.preventDefault()
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <SellAirtimeFormStyle>
      <form action='' className='sellairtimeform'>
        {modal && (
          <ModalPopupStyle>
            <div className='modal'>
              <div onClick={toggleModal} className='overlay'></div>
              <div className='modal-content'>
                <h5>
                  Admin has been notified Your wallet would be credited soon
                </h5>
                <button className='close-modal' onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          </ModalPopupStyle>
        )}
        <div className='sellAirtime-header'>
          <h1 className='sel'>Transfer Airtime</h1>
        </div>
        <label htmlFor=''>Network</label>
        <Select
          className='selections'
          styles={CustomStyle}
          onChange={handleChange}
          options={networkProvidersOptions}
          placeholder='Select Network'
          name='network'
          //value={networkName}
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
          />

          <InputField
            type='input'
            className='input'
            label='Amount to Sell'
            placeholder='NGN'
            name='airtimeAmount'
            change={(e) => setamountToSell(e.target.value)}
            value={airtimeAmount}
          />

          <InputField
            type='input'
            className='input'
            label='USSD'
            placeholder={'*780*{amount}*09088756433*5000#'}
            name='ussd'
            // change={(e) => setussd(e.target.value)}
            value={ussd}
            readOnly
          />

          <InputField
            type='input'
            className='input'
            label='Amount to Receive'
            placeholder='NGN'
            name='amountToReceive'
            //change={(e) => setamountToReceive(e.target.value)}
            value={calcReceive}
            readOnly
          />

          <InputField
            type='input'
            className='input'
            label='Destination Phone Number'
            placeholder='Destination Phone Number'
            name='destinationPhoneNumber'
            // change={(e) => setdestinationPhoneNumber(e.target.value)}
            value={destinationPhoneNumber}
            readOnly
          />
          <p className='clkdecs'>
            After transferring the airtime, click on the "Send” button below
          </p>
        </Label>

        <button type='submit' className='btnnn' onClick={handleSubmit}>
          Sent, Notify Admin
        </button>
      </form>

      <ToastContainer />
    </SellAirtimeFormStyle>
=======
  }

  // if (modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <FirstTabStyle>
      <h6 className='sellAirtime_h3' id='trans'>
        Transfer Airtime
      </h6>
      <div className='sellAirtime_main_body'>
        <div className='sellAirtime_body_layout'>
          <form action='' className='form-container'>
            {/* {modal && (
              <ModalPopupStyle>
                <div className='modal'>
                  <div onClick={toggleModal} className='overlay'></div>
                  <div className='modal-content'>
                    <h5>Admin has been notified </h5>
                    <h5>Your wallet would</h5>
                    <h5>be credited soon</h5>

                    <button className='close-modal' onClick={toggleModal}>
                      X
                    </button>
                  </div>
                </div>
              </ModalPopupStyle> */}
            {/* )} */}

            <label htmlFor=''>Network</label>
            <Select
              id='input99'
              styles={CustomStyle}
              onChange={HandleChange}
              // options={networkProvidersOptions}
              options={networkProviders}
              placeholder='Select Network'
              name='network'
              //value={networkName}
              // className="manage_input"
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
                // change={(e) => setussd(e.target.value)}
                readOnly
              />
              <div className='ussdContainer'>
                <InputField
                  type='text'
                  style={{ backgroundColor: '#F5F5F5' }}
                  label='USSD'
                  placeholder={'*780*{amount}*09088756433*5000#'}
                  name='ussd'
                  // change={(e) => setussd(e.target.value)}
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
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
  )
}
export default SellAirtimeForm

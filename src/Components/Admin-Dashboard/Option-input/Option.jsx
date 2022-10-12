import React, { useEffect } from 'react'
import { useState } from 'react'
import jwtDecode from 'jwt-decode'
import axios from '../../../Api/axios'
import './option.css'
import Swal from 'sweetalert2'

function Option({ closeModal, setId2 }) {
  const [amount, setAmount] = useState('')
  // const [email, setEmail] = useState('localStorage.getItem("email")')
  const [userDetails, setUserDetails] = useState([])
  // console.log("USER DETAILS", userDetails)
  const email = userDetails.email

  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)

  async function getUser() {
    try {
      const res = await axios.get(`/users/getsingle/${decoded.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUserDetails(res.data.user)
    } catch (error) {}
  }
  useEffect(() => {
    getUser()
  }, [])

  function handleEdit(e) {
    setAmount(e.target.value)
  }

  console.log('BUDGET ID', setId2)

  const calcReceive = `${parseFloat(parseInt(amount * 0.7).toFixed(4))}`

  const close = () => {
    closeModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const id = localStorage.getItem('id')
      //
      const response = await axios.patch(
        `/users/updatewallet/${setId2}`,
        {
          email,
          amount: calcReceive,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(response)
      close()
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: response.data.msg,
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='option-modal-bg'>
        <div className='option_background'>
          <h4 className='option_h4'>Enter an amount</h4>
          <form onSubmit={handleSubmit}>
            <div className='option_input_wrapper'>
              <label>Amount sent</label>
              <input
                className='option_input '
                type='number'
                value={amount}
                onChange={handleEdit}
                required
              />
            </div>
            <div className='option_input_wrapper'>
              <label>Amount received</label>
              <input
                className='option_input option_bgcolor'
                type='number'
                value={calcReceive}
                readOnly
              />
            </div>
            <button
              type='submit'
              className='option_button'
              onClick={() => handleSubmit}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Option

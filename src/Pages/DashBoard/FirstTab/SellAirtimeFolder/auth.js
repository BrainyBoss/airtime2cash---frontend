import Swal from 'sweetalert2'
// import {useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'

// const client = axios.create({
//   baseURL: `${process.env.REACT_APP_BASE_URL}`,
// })

const client2 = axios.create({
  baseURL: `${process.env.REACT_APP_ACCT_BASE_URL}`,
})

// const localStorageId = localStorage.getItem('id')

const token = localStorage.getItem('token')

export const postSellAirtime = async (data) => {
  try {
    console.log(token)
    const response = await client2.post(`/airtime/transfer`, data, {
      headers: { authorization: `Bearer ${token}` },
    })
  
    return response
  } catch (error) {
    console.log('rew', error)
    return error
  }
}

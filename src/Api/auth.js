import axiosConfig from "./axios";
import axios from 'axios'
import Swal from 'sweetalert2'

export const forgotPassword= (data) => {
  const url = "/forgotpassword";
  return axiosConfig.post(url, data);
};

export const withdrawBalance = async (data) => {
    console.log(data);
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`http://localhost:4000/cash/withdraw`, data, {
            headers: { authorization: `Bearer ${token}` },
        });
      console.log(response);
      // localStorage.setItem('wallet', response.data.newWalletBalance)
      Swal.fire({
        title: 'Success!',
        text: 'succesfully withdrawn',
        icon: 'success',
        confirmButtonText: 'OK',
      })
       
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'error!',
        text: 'insufficient balance',
        icon: 'error',
        confirmButtonText: 'OK',
      })
    }
};
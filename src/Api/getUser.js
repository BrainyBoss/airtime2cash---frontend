import axios from "./axios";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token")
const id = localStorage.getItem("id")
// const decoded = jwtDecode(token)
export default async function getUser(){
  const token = localStorage.getItem("token")
const decoded = jwtDecode(token)
    try {
      const res = await axios.get(`/users/getsingle/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }
      ); 
      return res;
    } catch (error) {

    }
  }
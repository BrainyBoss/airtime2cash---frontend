import React from 'react'
import { Fragment, useRef, useState, useEffect } from 'react'
import './overview.css'
import Option from '../Option-input/Option'
import axios from '../../../Api/axios'
import jwtDecode from 'jwt-decode'

const Overview = () => {
  const [idOfBudget, setIdOfBudget] = useState(-1)
  const ref = useRef(null)
  const [modal, setModal] = useState(false)
  const [table, setTable] = useState([])
  // const [status, setStatus] = useState('pending')
  const [id2, setId2] = useState('')
  const [transactionId, setTransactionsid]=useState('')
  const [email, setEmail] = useState('')

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIdOfBudget(-1)
    }
  }
  function shutdownmodal() {
  setModal(false)
}
  const handleGet = async(id) =>{
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const response = await axios.get(`/users/verification/${decoded.id}`,{
        headers: {Authorization : `Bearer ${token}`}
      })
      console.log(response)
      localStorage.setItem('otp', response.data.token)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleModal = () => {
    setModal(true)
    handleGet()

  }

  useEffect(() => {
    axios
      .get('/airtime/allTransactions/pending')
      .then((res) => {
        console.log('we want' ,res)
        setTable(res.data.content)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  })

  

  return (
    <>
      <div className='container_asm'>
        <div className='admin_main-content'>
          <div className='admin_bg'>
            <h1>Admin Dashboard</h1>
            <table cellSpacing={0}>
              <tr>
                <th>Email</th>
                <th>Phone number</th>
                <th>Amount sent</th>
                <th>Amount to receive</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

                {table && table.length > 0 ? (
          table.map((item, index) => (
            <tr>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.amountToSell}</td>
              <td>{item.amountToReceive}</td>
              <td>{item.transactionStatus}</td>
              <td
                style={{
                  cursor: "pointer",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setId2(item.userId)
                  setIdOfBudget(item.id)
                  setTransactionsid(item.id)
                  console.log("new",id2)
                }}
              >
                ...
                {idOfBudget === item.id ? (
                    <Fragment>
                      <span ref={ref} className="dropdown">
                        <p onClick={toggleModal}>
                          Edit
                        </p>
                        {/* <p 
                        >
                          Cancel
                        </p> */}
                      </span>
                    </Fragment>
                  ) : null}
              </td>
            </tr>
          )).reverse()
        ) : (
          <p>No data to display</p>
        )}
      </table>
           
            </div>
            </div>
            
        </div>
     

{modal && <Option closeModal={setModal} shutdownmodal={shutdownmodal}  setTransactionsid={transactionId} setId2={id2} />}
</>
    );
};

export default Overview

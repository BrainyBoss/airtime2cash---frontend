import React from 'react'
import { Fragment, useRef, useState, useEffect } from 'react'
import './overview.css'
import Option from '../Option-input/Option'
import axios from '../../../Api/axios'

const Overview = () => {
  const [idOfBudget, setIdOfBudget] = useState(-1)
  const ref = useRef(null)
  const [modal, setModal] = useState(false)
  const [table, setTable] = useState([])
  const [status, setStatus] = useState('pending')
  const [id2, setId2] = useState('')
  // const [id1, setId1] = useState('')

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIdOfBudget(-1)
    }
  }

  const toggleModal = () => {
    setModal(true)
  }

  useEffect(() => {
    axios
      .get('/airtime/allTransactions/pending')
      .then((res) => {
        console.log('we want', res.data.content)
        setTable(res.data)
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

              {table.content && table.content.length > 0 ? (
                table.content
                  .map((item, index) => (
                    <tr>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.amountToSell}</td>
                      <td>{item.amountToReceive}</td>
                      <td>{status}</td>
                      <td
                        style={{
                          cursor: 'pointer',
                          fontSize: '25px',
                          fontWeight: 'bold',
                        }}
                        onClick={() => {
                          setId2(item.userId)
                          setIdOfBudget(item.id)
                        }}
                      >
                        ...
                        {idOfBudget === item.id ? (
                          <Fragment>
                            <span ref={ref} className='dropdown'>
                              <p onClick={toggleModal}>Edit</p>
                              <p>Cancel</p>
                            </span>
                          </Fragment>
                        ) : null}
                      </td>
                    </tr>
                  ))
                  .reverse()
              ) : (
                <p>No data to display</p>
              )}
            </table>
          </div>
        </div>
      </div>

      {modal && <Option closeModal={setModal} setId2={id2} />}
    </>
  )
}

export default Overview

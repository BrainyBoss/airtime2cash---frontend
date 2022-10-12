import React from 'react'
import './success.css'
import {ReactComponent as Mark} from './check.svg'

function Successful({closeModal}) {

  return (
    <div className='manage_sucess_container'>
        <div className='manage_success'>
            <Mark className='manage_img' />
        {/* <img className='manage_img' src={Mark} alt="" /> */}
        <h2 className='manage_h2'>Bank Account Successful</h2>
        <p>Your bank account have been added Successfully</p>
        <button onClick={()=>closeModal(false)}>Done</button>

        
        </div>
    </div>
  )
}

export default Successful
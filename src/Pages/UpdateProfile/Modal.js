import React from "react";
import "./Modal.css"
export default  function Modal({ setOpenModal }){
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          </div>
        <div className="title">
          <h1>Change Profile image</h1>
        </div>
        <div className="body">
         <input type="file"></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Swal from "sweetalert2";
import "./ViewBankAccount";

function RemoveModal({ closeModal, id, delete1 }) {
  return (
    <div className="manage_sucess_container">
      <div className="manage_success">
        <img className="manage_img" src="../Successful/check.png" alt="" />
        <h2 className="manage_h2">Please confirm delete</h2>
        <p></p>
        <button id="modal-btn" onClick={() => closeModal(false)}>
          Cancel
        </button>
        <button
          id="modal-btn"
          onClick={() => {
            delete1(id);
            closeModal(false);
            Swal.fire({
              icon: "success",
              title: "Delete",
              text: "successfully removed",
            });
          }}
        >
          confirm
        </button>
      </div>
    </div>
  );
}

export default RemoveModal;

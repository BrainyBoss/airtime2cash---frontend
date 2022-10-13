import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import "./UpdateProfile.css";
import { Navbar } from "../../Components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";

const UpdateProfile = () => {
  const [firstName, setfirstName] = useState(localStorage.getItem("firstName"));
  const [phoneNumber, setphoneNumber] = useState(localStorage.getItem("phoneNumber"));
  const [lastName, setlastName] = useState(localStorage.getItem("lastName"));
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [modalState, setModalState] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem("avatar"));

  const token = localStorage.getItem("token");
  let decoded = jwtDecode(token);
  const navigate = useNavigate();

  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "tvwykctj");
    const options = {
      method: "POST",
      body: formData,
    };

    return fetch("https://api.Cloudinary.com/v1_1/pod-d/image/upload", options)
      .then((res) => res.json())
      .then((res) => setAvatarUrl(res.url))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (formData) => {
    formData.preventDefault();

    try {
      const res = await axios.patch(
        `/users/edit/${decoded.id}`,
        {
          firstName,
          lastName,
          phoneNumber,
          avatar: avatarUrl,
        },

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("RESPONSE", res)

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("avatar", avatarUrl);

      Swal.fire({
        icon: "success",
        title: "Updated",
        text: res.data.message,
      });

      res.data.updatedRecord.role ? navigate("/admin") : navigate("/dashboard");
    } catch (error) {
      console.log("ERROR", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.Error,
      });
      console.log("error2",error)
    }
  };

  const handlefirstName = (e) => {
    setfirstName(e.target.value);
  };
  const handlelastName = (e) => {
    setlastName(e.target.value);
  };

  const handlephoneNumber = (e) => {
    setphoneNumber(e.target.value);
  };

  const wrapperRef = useRef(null);
  function useOutsideAlert(ref) {
    useEffect(() => {
      function handleClickOutSide(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalState(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutSide);
      return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
      };
    }, [ref]);
  }
  useOutsideAlert(wrapperRef);
  return (
    <div className="general-holder">
      <Navbar dashboard />
      <div  id="gg" className="login_container move">
        <div className="update_back move-up">
          <div className="login_header">
            <img src="Frame 8589.svg" alt="logo" />
          </div>

          <form onSubmit={handleSubmit}>
            <p>{error}</p>
            <div className="basic">
              <h3 className="basic-info">Basic Information</h3>
            </div>
            <div>
              <label>First Name</label>
              <input
                type="text"
                autoComplete="off"
                onChange={handlefirstName}
                value={firstName}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                autoComplete="off"
                onChange={handlelastName}
                value={lastName}
                placeholder="Enter your last name"
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                autoComplete="off"
                onChange={handlephoneNumber}
                value={phoneNumber}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="avatar6">
              <label>Profile image</label>
              <input
                classname="avatar-photo"
                type="file"
                placeholder="upload image"
                
                onChange={handleImageUpload}
                // onClick={() => {
                //   // setModalState(true);
                //   // setModalOpen(true)
                // }}
              />
            </div>

            <button type="submit" className="update-btn">
              save
            </button>
            <div></div>
          </form>
        </div>
        {modalState && (
          <div className="gen">
            <div className="modal-content" ref={wrapperRef}>
              <div
                className="close-btn"
                onClick={() => {
                  setModalState(false);
                }}
              >
                <FaTimes />
              </div>
              <img src="lll.jpg" alt="logo" className="modal-logo" />
              <div className="upload-section">
                <h3>upload a photo</h3>
                <input type="file" name="" className="modal-input" />
                <p className="allow-text">
                  *Allowed formats: jpeg, jpg, png and svg*{" "}
                </p>
                <button className="save-btn-modal"> upload image</button>
              </div>
            </div>
          </div>
        )}
        {/* <div>{modalOpen &&<Modal setOpenModal={setModalOpen} />}</div>  */}

        <div className="subdiv"></div>
      </div>
    </div>
  );
};

export default UpdateProfile;

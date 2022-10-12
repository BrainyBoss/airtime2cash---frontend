import React, { useState } from "react";
import { useField } from "formik";
import { FiEyeOff, FiEye } from "react-icons/fi";
import "./ResetPassword.css"
import './FormStyles.css'

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);
  console.log("ERROR", meta)
  return (
    <div style={{ position: "relative" }}>
      <div className='StyledLabel
' htmlFor={props.name}>{props.label}</div>
      {props.type !== "password" && <div className='StyledTextInput' {...field} {...props} />}
      {props.type === "password" && (
          <div className="input-container">

              <input
                invalid={meta.touched && meta.error}
                {...field}
                {...props}
                type={show ? "text" : "password"}
              />
                {props.type === "password" && (
                    <div className='StyledIcon'  onClick={() => setShow(!show)} right>
                   
                    </div>
                )}
          </div>
      )}
      {!meta.touched && meta.error ? (
        <div >(meta.error)</div>
      ) : (
        <div className="ErrorMsg" style={{ visibility: "hidden" }}>.</div>
      )}
    </div>
  );
};

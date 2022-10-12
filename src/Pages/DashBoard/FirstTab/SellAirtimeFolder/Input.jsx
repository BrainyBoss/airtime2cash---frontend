import { StyleInput } from './signUpStyle'
// import "./Input.css";

const InputField = ({ ...props }) => {
  return (
    <div>
<<<<<<< HEAD
      <div className='input-label'>{props.label}</div>
=======
      <div className='transfer-input-label'>{props.label}</div>
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e

      <StyleInput
        name={props.name}
        type={props.type}
        value={props.value}
        className={props.class}
        placeholder={props.placeholder}
        onChange={props.change}
<<<<<<< HEAD
=======
        style={props.style}
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
      />
    </div>
  )
}

export default InputField

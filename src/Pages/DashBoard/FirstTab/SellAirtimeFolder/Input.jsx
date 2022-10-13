import { StyleInput } from './signUpStyle'
// import "./Input.css";

const InputField = ({ ...props }) => {
  return (
    <div>
      <div className='transfer-input-label'>{props.label}</div>

      <StyleInput
        name={props.name}
        type={props.type}
        value={props.value}
        className={props.class}
        placeholder={props.placeholder}
        onChange={props.change}
        style={props.style}
      />
    </div>
  )
}

export default InputField

import styled from 'styled-components'

const Button = styled.button`
    background-color: #012A4A;
    color: #fff;
    padding: 10px;
    border-radius:${({borderRadius}) => (borderRadius ? borderRadius : "5px")};
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    height: ${({height}) => (height ? height : "auto")};
    width:${({width}) => (width ? width : "auto")};
    background-image: linear-gradient(to right, #DE3D6D,#F5844C);
    &:hover{
        background-color: #DE3D6D;
    }
`

export default Button
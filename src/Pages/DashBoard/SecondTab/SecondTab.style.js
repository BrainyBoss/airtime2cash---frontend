
import styled from 'styled-components'

const SecondTabStyle = styled.div`

   height: 80%;
  width: 100%;
  margin-top: -19px;
  margin-bottom: -19%;
  margin-left: 3px%;
  // border: 4px solid blue;

  flex-direction: column;
  height: auto;

  /* .select {
    background: red;
    width: 100px;
  } */

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-right: 30px;
    margin-left: 0px;
  }
 
  .is_danger {
    color: red;

    width: 100%;
    font-size: 12px;
  }
  #input99{
    width:100%
  }
  #trans{
    margin-bottom: 20px
  }

  .sellAirtime_input_background {
    background: rgba(0, 0, 0, 0.04);
    border: none;
  }

  .sellAirtime_body_layout {
    width: 100%;
    /* display: flex;
    flex-direction: column; */
  }

  .sellAirtime_h3 {
  
    line-height: 17px;
    color: #012a4a;
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
width: 78px;
top:-4px;
height: 17px;
  }
  .form-container {
    
    padding: 3px
  }

  input,
  select {
    height: 43px;
    border: 1px solid #e5e5e5;
    width: 100%;
  }
  & label {
    padding-bottom: 5px;
    /* background-color: #012a4a; */
    width: 100%;
  }
 
  #btn11 {
    width: 198px;
    height: 48px;
    background: linear-gradient(92.1deg, #de3d6d 55.67%, #f5844c 101.51%);
    margin-top: 25px;
    border: none;
    color: #fff;
  }
  input::placeholder {
    color: #c4c4c4;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding-left: 5px;
  }
  .option-1 {
    color: #c4c4c4;
    padding-left: 5px;
  }
  @media screen and (max-width: 800px) {
    .sellAirtime_body_layout {
      width: 100%;
    }
    input,
    select {
      height: 30px;
      width: 95%;
    }
   & .sellAirtime_h3 {
    margin-left: 1rem
   }
   & .form-container> label{
    margin-left: -5rem
   }
  }
`

export default SecondTabStyle

import styled from "styled-components";

export const WithdrawStyle = styled.div`
.containerBody {
    width: 100%;
    background: #ffffff;
    border: none;
    color: #012a4a;
}
.Whead {
    font-weight:bold;
    font-size: 14px;
    margin: 20px 0;
}
.form-wrapper{
    justify-content: center;
}
.form-input {
    background: rgba(0, 0, 0, 0.04);
    border: none;
    width: 100%;
    padding: 3%;
    margin-bottom: 3%;
    margin-top: 3%;
    outline: none;
  }
  select {
    background: rgba(0, 0, 0, 0.04);
    width: 100%;
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    margin : 10px 0;
    border: none;
    outline: none;
  }
  .form-entry {
    width: 100%;
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border: 2px solid rgba(0, 0, 0, 0.04);
    outline: none;
  }
  .w-btn {
    margin-top: 10px;
    align-items: center;
    padding: 8px 16px;
    width: 198px;
    height: 48px;
    background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);
  }
}
`
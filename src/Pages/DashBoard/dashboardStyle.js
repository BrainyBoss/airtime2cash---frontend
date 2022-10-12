import styled from 'styled-components'

export const DashboardStyle = styled.div`
  .generaldiv {
    background-color: #fff;
    padding-bottom: 4rem;
<<<<<<< HEAD

    & .topPage {
      width: 100%;
      margin: 0%;
      max-width: 100vw;
      height: 25rem;
      background: rgba(255, 234, 241);
    }

=======

    & .topPage {
      width: 100%;
      margin: 0%;
      max-width: 100vw;
      height: 25rem;
      background: rgba(255, 234, 241);
    }

>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
    & .mainPage {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50rem;
      max-width: 100%;
<<<<<<< HEAD
      height: 79.125rem;
=======
      /* height: 72.125rem; */
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
      margin: -13rem auto 15vh auto;
      margin: -13rem auto 0 auto;
      border: 1px solid #d9d9d9;

      & .headText {
        margin: 8% 0 10% 0;
        font-weight: 600;
        font-size: 2rem;
        color: #012a4a;
      }

      & .balance-wrapper2 {
        color: #ffffff;
        margin-top: -2%;
        width: 80%;
        max-width: 100%;
        background: rgb(240, 0, 102);
        border-radius: 1.5rem;
        padding: 0;
      }

      & .balance2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4% 0;

        & .text2 {
          font-weight: 400;
          font-size: 16px;
          margin: 0;
        }

        & .acct-bal2 {
          font-weight: 700;
          font-size: 2rem;
          /* font-size: 32px; */

          margin: 2.5% 0 1% 0;
        }

        & button {
          justify-content: center;
          align-items: center;
          padding: 8px 10px 10px 8px;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.05);
          opacity: 0.8;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 100px;
        }
      }
    }
    @media screen and (max-width: 800px) {
      & .topPage {
        height: 15rem;
      }
      // & .mainPage{
      //   height:22rem
      // }
    }
  }
`
<<<<<<< HEAD
=======

>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e
export const TabsElement = styled.div`
  /* width: 80%; */
  box-sizing: border-box;
  cursor: pointer;
  ${({ active }) => active && `border-bottom: 1px solid #de3d6d;`}
`

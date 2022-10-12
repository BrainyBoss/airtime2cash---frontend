<<<<<<< HEAD
import React from 'react'
import FirstTabStyle from './FirstTab.style'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function FirstTab() {
  const networks = ['airtel', 'mtn', 'glo', 'etisalat']

  const validationSchema = Yup.object({
    network: Yup.string().required('Please select a network').oneOf(networks),
    phoneNumber: Yup.string().min(11).max(11).required(),
    amountToSell: Yup.string().required(),
    ussd: Yup.string().required(),
    amountToReceive: Yup.string().required(),
    destinationPhoneNumber: Yup.string().min(11).max(11).required(),
  })

  // INITIAL VALUES

  const initialValues = {
    network: '',
    phoneNumber: '',
    amountToSell: '',
    ussd: '',
    amountToReceive: '',
    destinationPhoneNumber: '',
  }

  //SUBMIT

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }
  // MAPPING NETWORK ARRAY
  const networkOptions = networks.map((network, key) => (
    <option value={network} key={key}>
      {network}
    </option>
  ))
  // ERROR MESSAGE
  const renderError = (message) => <p className='is_danger'>{message}</p>

  return (
    <FirstTabStyle>
      <h6 className='sellAirtime_h3'>Sell Airtime</h6>
      <div className='sellAirtime_main_body'>
        <div className='sellAirtime_body_layout'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              await onSubmit(values)
              resetForm()
            }}
          >
            <Form className='form-container'>
              <label>Network</label>
              <Field
                name='network'
                as='select'
                className='select'
                type='text'
                placeholder='network'
              >
                <option value={''}>Select a network</option>
                {networkOptions}
              </Field>

              <ErrorMessage className='' name='network' render={renderError} />
              <br />
              <label>Phone Number</label>
              <Field
                type='number'
                placeholder='Phone Number'
                className='input'
                name='phoneNumber'
              />
              <ErrorMessage name='phoneNumber' render={renderError} />

              <label>Amount to Sell</label>
              <Field
                type='number'
                placeholder='NGN'
                className='input'
                name='amountToSell'
              />
              <ErrorMessage name='amountToSell' render={renderError} />

              <label>USSD</label>
              <Field
                type='text'
                placeholder='*780*080933445566*500#'
                className='sellAirtime_input_background'
                name='ussd'
              />
              <ErrorMessage name='ussd' render={renderError} />

              <label>Amount to Recieve</label>
              <Field
                type='text'
                placeholder='NGN'
                className='sellAirtime_input_background'
                name='amountToReceive'
              />
              <ErrorMessage name='amountToReceive' render={renderError} />

              <label>Destination Phone Number</label>
              <Field
                type='text'
                placeholder='destination phone number'
                className='sellAirtime_input_background'
                name='destinationPhoneNumber'
                required
              />
              <ErrorMessage
                name='destinationPhoneNumber'
                render={renderError}
              />

              <button>Sell Airtime</button>
            </Form>
          </Formik>
        </div>
      </div>
    </FirstTabStyle>
  )
}

export default FirstTab
=======
// import React from "react";
// import FirstTabStyle from "./FirstTab.style";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// function FirstTab() {
//   const networks = ["airtel", "mtn", "glo", "etisalat"];

//   const validationSchema = Yup.object({
//     network: Yup.string().required("Please select a network").oneOf(networks),
//     phoneNumber: Yup.string().min(11).max(11).required(),
//     amountToSell: Yup.string().required(),
//     ussd: Yup.string().required(),
//     amountToReceive: Yup.string().required(),
//     destinationPhoneNumber: Yup.string().min(11).max(11).required(),
//   });

//   // INITIAL VALUES

//   const initialValues = {
//     network: "",
//     phoneNumber: "",
//     amountToSell: "",
//     ussd: "",
//     amountToReceive: "",
//     destinationPhoneNumber: "",
//   };

//   //SUBMIT

//   const onSubmit = (values) => {
//     alert(JSON.stringify(values, null, 2));
//   };
//   // MAPPING NETWORK ARRAY
//   const networkOptions = networks.map((network, key) => (
//     <option value={network} key={key}>
//       {network}
//     </option>
//   ));
//   // ERROR MESSAGE
//   const renderError = (message) => <p className="is_danger">{message}</p>;

//   return (
//     <FirstTabStyle>
//       <h6 className="sellAirtime_h3">Sell Airtime</h6>
//       <div className="sellAirtime_main_body">
//         <div className="sellAirtime_body_layout">
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={async (values, { resetForm }) => {
//               await onSubmit(values);
//               resetForm();
//             }}
//           >
//             <Form className="form-container">
//               <label>Network</label>
//               <Field
//                 name="network"
//                 as="select"
//                 className="select"
//                 type="text"
//                 placeholder="network"
//               >
//                 <option value={""}>Select a network</option>
//                 {networkOptions}
//               </Field>

//               <ErrorMessage className="" name="network" render={renderError} />
//               <br />
//               <label>Phone Number</label>
//               <Field
//                 type="number"
//                 placeholder="Phone Number"
//                 className="input"
//                 name="phoneNumber"
//               />
//               <ErrorMessage name="phoneNumber" render={renderError} />

//               <label>Amount to Sell</label>
//               <Field
//                 type="number"
//                 placeholder="NGN"
//                 className="input"
//                 name="amountToSell"
//               />
//               <ErrorMessage name="amountToSell" render={renderError} />

//               <label>USSD</label>
//               <Field
//                 type="text"
//                 placeholder="*780*080933445566*500#"
//                 className="sellAirtime_input_background"
//                 name="ussd"
//               />
//               <ErrorMessage name="ussd" render={renderError} />

//               <label>Amount to Recieve</label>
//               <Field
//                 type="text"
//                 placeholder="NGN"
//                 className="sellAirtime_input_background"
//                 name="amountToReceive"
//               />
//               <ErrorMessage name="amountToReceive" render={renderError} />

//               <label>Destination Phone Number</label>
//               <Field
//                 type="text"
//                 placeholder="destination phone number"
//                 className="sellAirtime_input_background"
//                 name="destinationPhoneNumber"
//                 required
//               />
//               <ErrorMessage
//                 name="destinationPhoneNumber"
//                 render={renderError}
//               />

//               <button>Sell Airtime</button>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </FirstTabStyle>
//   );
// }

// export default FirstTab;
>>>>>>> 18fcb7170a5b8d15fe27d309bfbc7285d9696b3e

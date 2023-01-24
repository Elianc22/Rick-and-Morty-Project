import React from 'react';
import './_formStyles-SignUp.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import Image from './rick-and-morty.png';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password too short').required('Password is required'),
  confirm: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match')
});

const Formsignup = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const initialCredentials = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  };

  return (
    <div className={`container-signup ${isMobile ? '' : 'col-12'}`}>
      {isMobile ? null : <img className="signup-img" src={Image} alt=""></img>}
      <div className={`container-form ${isMobile ? '' : 'col-6'}`}>
        <div>
          <h1>Rick and Morty</h1>
          <h4>Sign up and join us!</h4>
        </div>
        <Formik
          initialValues={initialCredentials}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem('credentials', values);
          }}>
          {({ errors, isSubmitting }) => (
            <Form className={`signup-form ${isMobile ? '' : 'col-auto'}`}>
              <div>
                <Field
                  className="form-inputs"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                />
                <span style={{ color: 'red' }}>{errors.name}</span>
              </div>
              <div>
                <Field
                  className="form-inputs"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <span style={{ color: 'red' }}>{errors.email}</span>
              </div>
              <div className="container-input-password">
                <Field
                  className="form-inputs"
                  id="password"
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  placeholder="Password"
                />
                <span className="icon-password" onClick={() => setShowPwd(!showPwd)}>
                  <i
                    className={`bi ${showPwd ? 'bi-eye' : 'bi-eye-slash'} 
                    }`}
                  />
                </span>
              </div>
              <span style={{ color: 'red' }}>{errors.password}</span>
              <div className="container-input-password">
                <Field
                  className="form-inputs"
                  id="confirm"
                  name="confirm"
                  type={showConfirmPwd ? 'text' : 'password'}
                  placeholder="Confirm Password"
                />
                <span className="icon-password" onClick={() => setShowConfirmPwd(!showConfirmPwd)}>
                  <i
                    className={`bi ${showConfirmPwd ? 'bi-eye' : 'bi-eye-slash'} 
                    }`}
                  />
                </span>
              </div>
              <span style={{ color: 'red' }}>{errors.confirm}</span>
              <div>
                <button className="btn-form" type="submit">
                  {isSubmitting ? (
                    <Spinner animation="border" role="status" size="sm" className="mt-0" />
                  ) : (
                    'Create account'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Formsignup;

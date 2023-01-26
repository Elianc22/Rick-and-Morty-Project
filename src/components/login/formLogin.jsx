import React from 'react';
import './_formStyles.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Formlogin = () => {
  const [showPwd, setShowPwd] = useState(false);

  const initialCredentials = {
    email: '',
    password: ''
  };

  return (
    <div className={`container-login ${isMobile ? '' : 'col-12'}`}>
      <div className={`container-form ${isMobile ? '' : 'col-6'}`}>
        <div>
          <h1>Rick and Morty</h1>
          <h4>Login into your account</h4>
        </div>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={initialCredentials}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem('credentials', values);
          }}>
          {({ errors, isSubmitting }) => (
            <Form className={`login-form ${isMobile ? '' : 'col-auto'}`}>
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
                <span style={{ color: 'red' }}>{errors.password}</span>
              </div>
              <div>
                <a className="links-form" href="">
                  Forgot password
                </a>
              </div>
              <div>
                <button className="btn-form" type="submit">
                  {isSubmitting ? (
                    <Spinner animation="border" role="status" size="sm" className="mt-0" />
                  ) : (
                    'Log in'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {isMobile ? null : (
        <img
          className="login-img"
          src="https://www.augsburger-allgemeine.de/img/panorama/crop59858091/385098565-cv1_1-w1200/Sky-Ticket-Rick-and-Morty.jpg"
          alt=""></img>
      )}
    </div>
  );
};

export default Formlogin;

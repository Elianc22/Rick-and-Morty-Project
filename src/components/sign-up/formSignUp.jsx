import React from 'react';
import './_formStyles-SignUp.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import Image from './rick-and-morty.png';

const loginSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password too short').required('Password is required'),
  confirm: Yup.string().when('password', {
    is: (value) => (value && value.lenght > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!')
  })
});

const Formsignup = () => {
  const [showPwd, setShowPwd] = useState(false);

  const initialCredentials = {
    name: '',
    email: '',
    password: ''
  };

  return (
    <div className={`container-login ${isMobile ? '' : 'col-12'}`}>
      {isMobile ? null : <img className="login-img" src={Image} alt=""></img>}
      <div className={`container-form ${isMobile ? '' : 'col-6'}`}>
        <div>
          <h1>Rick and Morty</h1>
          <h4>Sign up and join us!</h4>
        </div>
        <Formik
          initialValues={initialCredentials}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem('credentials', values);
          }}>
          {({ touched, errors, isSubmitting }) => (
            <Form className={`login-form ${isMobile ? '' : 'col-auto'}`}>
              <div>
                <Field
                  className="form-inputs"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                />
                {errors.email && touched.email && (
                  <ErrorMessage component="div" name="name"></ErrorMessage>
                )}
              </div>
              <div>
                <Field
                  className="form-inputs"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                {errors.email && touched.email && (
                  <ErrorMessage component="div" name="email"></ErrorMessage>
                )}
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
                {errors.password && touched.password && (
                  <ErrorMessage component="div" name="password"></ErrorMessage>
                )}
              </div>
              <div className="container-input-password">
                <Field
                  className="form-inputs"
                  id="confirm"
                  name="confirm"
                  type={showPwd ? 'text' : 'password'}
                  placeholder="Confirm Password"
                />
                <span className="icon-password" onClick={() => setShowPwd(!showPwd)}>
                  <i
                    className={`bi ${showPwd ? 'bi-eye' : 'bi-eye-slash'} 
                    }`}
                  />
                </span>
                {errors.password && touched.password && (
                  <ErrorMessage component="div" name="password"></ErrorMessage>
                )}
              </div>
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

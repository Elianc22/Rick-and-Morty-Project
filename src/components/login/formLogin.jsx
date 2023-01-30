import React from 'react';
import './_formStyles.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import { Button } from '../commons/button';

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
          {({ errors }) => (
            <Form className={`login-form ${isMobile ? '' : 'col-auto'}`}>
              <div className="container-div">
                <Field
                  className="form-inputs"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <span style={{ color: 'red' }}>{errors.email}</span>
              </div>
              <div className="container-input-password container-div">
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
              <div>
                <a className="links-form" href="">
                  Forgot password
                </a>
              </div>
              <div>
                <Button type={'submit'} name={'Log in'} />
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

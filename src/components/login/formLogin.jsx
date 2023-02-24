import React from 'react';
import './_formStyles.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import { Button } from '../commons/button';
import { Errors } from '../commons/erros';
import { Input } from '../commons/input';
import logIn from '../../services/apiLogin';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Formlogin = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

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
            const responseApi = await logIn('sessions', values.email, values.password);
            if (responseApi.error) {
              setApiError(responseApi.error);
            } else {
              return navigate('/');
            }
          }}>
          {({ errors, isSubmitting }) => (
            <Form className={`login-form ${isMobile ? '' : 'col-auto'}`}>
              <div className="container-input-login">
                <Input
                  className="form-inputs"
                  id={'email'}
                  name={'email'}
                  placeholder={'Email'}
                  type={'email'}
                />
                <Errors error={errors.email} />
              </div>
              <div className="container-input-password container-input-login">
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
              <Errors error={errors.password} />
              <div>
                <a className="links-form" href="">
                  Forgot password
                </a>
              </div>
              <div>
                <Button isSubmitting={isSubmitting} type={'submit'} name={'Log in'} />
              </div>
              {apiError && <Errors error="Wrong user or password" />}
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

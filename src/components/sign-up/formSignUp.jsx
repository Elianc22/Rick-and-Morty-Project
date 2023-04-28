import React from 'react';
import './_formStyles-SignUp.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import signUp from '../../services/apiResgister';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import { Button } from '../commons/button';
import { Title } from '../commons/title';
import { Input } from '../commons/input';
import { Errors } from '../commons/erros';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password too short').required('Password is required')
});

const Formsignup = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  const initialCredentials = {
    name: '',
    email: '',
    password: ''
  };

  return (
    <div className={`container-signup ${isMobile ? '' : 'col-12'}`}>
      {isMobile ? null : <img className="signup-img" src="/images/rick-and-morty.png" alt=""></img>}
      <div className={`container-form ${isMobile ? '' : 'col-6'}`}>
        <Title title={'Rick and Morty'} subtitle={'Sign up and join us!'} />
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={initialCredentials}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            const responseApi = await signUp('users', values.name, values.email, values.password);
            if (responseApi.error) {
              setApiError(responseApi.error);
            } else {
              navigate('/home');
            }
          }}>
          {({ errors, isSubmitting }) => (
            <Form className={`signup-form ${isMobile ? '' : 'col-auto'}`}>
              <div className="container-input-signup">
                <Input
                  className="form-inputs"
                  id={'name'}
                  name={'name'}
                  placeholder={'Full name'}
                  type={'text'}
                />
                <Errors error={errors.name} />
              </div>
              <div className="container-input-signup">
                <Input
                  className="form-inputs"
                  id={'email'}
                  name={'email'}
                  placeholder={'Email'}
                  type={'email'}
                />
                <Errors error={errors.email} />
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
              <Errors error={errors.password} />
              <div>
                <Button isSubmitting={isSubmitting} type={'submit'} name={'Create an account'} />
              </div>
              {apiError && <Errors error="An error has occurred, try again later." />}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Formsignup;

import React from 'react';
import './_formStyles-SignUp.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import Image from '../../images/rick-and-morty.png';
import { Button } from '../commons/button';
import { Title } from '../commons/title';
import { Input } from '../commons/input';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password too short').required('Password is required')
});

const Formsignup = () => {
  const [showPwd, setShowPwd] = useState(false);

  const initialCredentials = {
    name: '',
    email: '',
    password: ''
  };

  return (
    <div className={`container-signup ${isMobile ? '' : 'col-12'}`}>
      {isMobile ? null : <img className="signup-img" src={Image} alt=""></img>}
      <div className={`container-form ${isMobile ? '' : 'col-6'}`}>
        <Title title={'Rick and Morty'} subtitle={'Sign up and join us!'} />
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={initialCredentials}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem('credentials', values);
          }}>
          {({ errors }) => (
            <Form className={`signup-form ${isMobile ? '' : 'col-auto'}`}>
              <div className="container-div">
                <Input
                  className="form-inputs"
                  id={'name'}
                  name={'name'}
                  placeholder={'Full name'}
                  type={'text'}
                />
                <span style={{ color: 'red' }}>{errors.name}</span>
              </div>
              <div className="container-div">
                <Input
                  className="form-inputs"
                  id={'email'}
                  name={'email'}
                  placeholder={'Email'}
                  type={'email'}
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
              <div>
                <Button type={'submit'} name={'Create an account'} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Formsignup;

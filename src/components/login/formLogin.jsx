import React from 'react';
import './_formStyles.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Formlogin = () => {
  const initialCredentials = {
    email: '',
    password: ''
  };

  return (
    <div className="container-login">
      <div>
        <h1>Rick and Morty</h1>
        <h4>Login into your account</h4>
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
          <Form className="login-form">
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
            <div>
              <Field
                className="form-inputs"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <ErrorMessage component="div" name="password"></ErrorMessage>
              )}
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
  );
};

export default Formlogin;

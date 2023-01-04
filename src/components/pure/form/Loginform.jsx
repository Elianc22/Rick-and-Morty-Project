import React from 'react';
import '../../../styles/loginStyle.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is requiered'),
  password: Yup.string().required('Password is requiered')
});

const Loginformik = () => {
  const initialCredentials = {
    email: '',
    password: ''
  };

  return (
    <div>
      <div>
        <h1>Rick and Morty</h1>
        <p>Login into your account</p>
      </div>
      <Formik
        // *** Initial values that the form will take ***
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // *** onSubmit Event ***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // *** We save the data in the localStorage ***
          localStorage.setItem('credentials', values);
        }}>
        {/* We obtain props from Formik */}

        {({ /*values*/ touched, errors, isSubmitting /*handleChange, handleBlur*/ }) => (
          <Form className="form-style">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <Field
              className="form-input"
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />

            {/* Emails errors */}
            {errors.email && touched.email && (
              <ErrorMessage component="div" name="email"></ErrorMessage>
            )}

            <label className="form-label" htmlFor="password">
              Password
            </label>
            <Field
              className="form-input"
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />

            {/* Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage component="div" name="password"></ErrorMessage>
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Loginformik;

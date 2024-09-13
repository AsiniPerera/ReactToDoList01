import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = ({ onLogin }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={LoginSchema}
    onSubmit={values => onLogin(values)}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="email" type="email" placeholder="Email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}

        <Field name="password" type="password" placeholder="Password" />
        {errors.password && touched.password ? <div>{errors.password}</div> : null}

        <button type="submit">Login</button>
      </Form>
    )}
  </Formik>
);

export default Login;

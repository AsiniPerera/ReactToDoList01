import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
});

const Register = ({ onRegister }) => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={RegisterSchema}
    onSubmit={values => onRegister(values)}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="name" placeholder="Name" />
        {errors.name && touched.name ? <div>{errors.name}</div> : null}

        <Field name="email" type="email" placeholder="Email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}

        <Field name="password" type="password" placeholder="Password" />
        {errors.password && touched.password ? <div>{errors.password}</div> : null}

        <button type="submit">Register</button>
      </Form>
    )}
  </Formik>
);

export default Register;

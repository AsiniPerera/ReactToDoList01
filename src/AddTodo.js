import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const TodoSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

const AddTodo = ({ onAdd }) => (
  <Formik
    initialValues={{ title: '', description: '' }}
    validationSchema={TodoSchema}
    onSubmit={values => onAdd(values)}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="title" placeholder="Title" />
        {errors.title && touched.title ? <div>{errors.title}</div> : null}

        <Field name="description" placeholder="Description" />
        {errors.description && touched.description ? <div>{errors.description}</div> : null}

        <button type="submit">Add Todo</button>
      </Form>
    )}
  </Formik>
);

export default AddTodo;

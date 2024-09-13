import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const TodoSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

const EditTodo = ({ todo, onSave, onCancel }) => (
  <div className="add-edit-todo-form">
    <h2>Edit Todo</h2>
    <Formik
      initialValues={{ title: todo.title, description: todo.description }}
      validationSchema={TodoSchema}
      onSubmit={(values) => {
        onSave({ ...todo, ...values });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="title" placeholder="Title" />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}

          <Field name="description" placeholder="Description" />
          {errors.description && touched.description ? <div>{errors.description}</div> : null}

          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default EditTodo;

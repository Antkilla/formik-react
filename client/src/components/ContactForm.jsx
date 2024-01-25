import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from './ValidationSchema';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      ValidationSchema={validationSchema} 
    >
        <Form>
            <div>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="Jacob" />
                <ErrorMessage name="name" component="div" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Jacob@hotmail.com" type="email" />
                <ErrorMessage name="email" component="div" />
            </div>

            <button type="submit">Submit</button>
        </Form>
    </Formik>
  );
};

export default ContactForm;
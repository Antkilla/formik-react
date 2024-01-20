import React from 'react';
import { Formik, Field, Form } from 'formik'

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
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="Jacob" />

                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Jacob@hotmail.com" type="email" />
    
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;

  
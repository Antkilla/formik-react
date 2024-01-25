import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button, Container, Row, Col, FormGroup, FormLabel } from 'react-bootstrap';
import validationSchema from './ValidationSchema';

const ContactForm = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <Container>
            <Row>
                <Col md={{ span:6, offset: 3 }}>
                    <Formik
                        initialValues={{
                        name: '',
                        email: '',
                        option: '',
                        select: '', 
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form>
                            <FormGroup>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Jacob"
                                    className="form-control"
                                />
                                <ErrorMessage name="name" component="div" className="text-danger" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Jacob@hotmail.com"
                                className="form-control"
                                />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="option">Options</FormLabel>
                                <div>
                                {options.map((option, index) => (
                                    <label key={index}>
                                    <Field type="radio" name="option" value={option} />
                                    {option}
                                    </label>
                                ))}
                                </div>
                                <ErrorMessage name="option" component="div" className="text-danger" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="selection">Selection</FormLabel>
                                <Field as="select" id="dropdown" name="selection" className="form-control">
                                <option value="" disabled>
                                    Select an option
                                </option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                    {option}
                                    </option>
                                ))}
                                </Field>
                                <ErrorMessage name="selection" component="div" className="text-danger" />
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit">Submit</Button>
                            </FormGroup>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;

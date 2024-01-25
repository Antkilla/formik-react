import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    option: Yup.string().required('Please select an option'),
    selection: Yup.string().required('Please select an option'),
  });
  

export default validationSchema;

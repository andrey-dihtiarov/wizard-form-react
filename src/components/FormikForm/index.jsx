import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

const FormikForm = ({ initialValues, validationSchema, submit, children }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => submit(values)}
  >
    <Form>{children}</Form>
  </Formik>
);

FormikForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
};

export default FormikForm;

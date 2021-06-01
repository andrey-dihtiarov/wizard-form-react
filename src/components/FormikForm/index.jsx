import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

const FormikForm = ({ initialValues, validationSchema, submit, children, className }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => submit(values)}
  >
    <Form className={className}>{children}</Form>
  </Formik>
);

FormikForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FormikForm.defaultProps = {
  className: '',
};

export default FormikForm;

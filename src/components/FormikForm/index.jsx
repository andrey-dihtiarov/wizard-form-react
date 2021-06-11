import { useEffect } from 'react';
import { useFormikContext, Form } from 'formik';
import { useSelector } from 'react-redux';

const FormikForm = ({ children, className, ...rest }) => {
  const { setFieldError } = useFormikContext();
  const { error } = useSelector((state) => state.form);

  useEffect(() => {
    if (error) {
      const { field, message } = error;
      setFieldError(field, message);
    }
  }, [error, setFieldError]);

  return (
    <Form className={className} {...rest}>
      {children}
    </Form>
  );
};

export default FormikForm;

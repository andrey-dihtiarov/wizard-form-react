import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

import classes from './InputContainer.module.scss';

const InputContainer = ({ field: { name }, label, children }) => (
  <div className={classes.block}>
    <label htmlFor={name} className={classes.label}>
      {label}
    </label>
    {children}
    <div className={classes.errorMessage}>
      <ErrorMessage name={name}>{(msg) => msg}</ErrorMessage>
    </div>
  </div>
);

InputContainer.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InputContainer.defaultProps = {
  label: '',
};

export default InputContainer;

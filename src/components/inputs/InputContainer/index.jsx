import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

import styles from './styles.module.scss';

const InputContainer = ({ field: { name }, label, children }) => (
  <div className={styles.block}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    {children}
    <div className={styles.errorMessage}>
      <ErrorMessage name={name}>{(msg) => msg}</ErrorMessage>
    </div>
  </div>
);

InputContainer.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

InputContainer.defaultProps = {
  label: '',
};

export default InputContainer;

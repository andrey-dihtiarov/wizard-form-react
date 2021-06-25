import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { InputBase } from '@material-ui/core';

import styles from './styles.module.scss';

const Field = forwardRef(({ isError, className, ...rest }, ref) => (
  <InputBase
    className={`${styles.field} ${isError ? styles.fieldError : ''} ${className}`}
    inputRef={ref}
    {...rest}
  />
));

Field.propTypes = {
  isError: PropTypes.bool,
  className: PropTypes.string,
};

Field.defaultProps = {
  isError: false,
  className: '',
};

export default Field;

import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const PasswordInput = ({ field, form: { touched, errors }, label, ...props }) => {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const { name } = field;
  const isError = !!(touched[name] && errors[name]);

  const changePasswordVisibility = () => setPasswordShown(!isPasswordShown);

  return (
    <InputContainer label={label} field={field}>
      <div className={styles.wrapper}>
        <input
          className={`${styles.field} ${isError ? styles.fieldError : ''}`}
          type={isPasswordShown ? 'text' : 'password'}
          value={field.value || ''}
          {...field}
          {...props}
        />
        {/*<IconButton*/}
        {/*  type="button"*/}
        {/*  onClick={changePasswordVisibility}*/}
        {/*  className={styles.icon}*/}
        {/*  icon={isPasswordShown ? ICONS.eye : ICONS.eyeSlash}*/}
        {/*/>*/}
        <IconButton size="small" onClick={changePasswordVisibility} className={styles.icon}>
          {isPasswordShown ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
        </IconButton>
      </div>
    </InputContainer>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};

PasswordInput.defaultProps = {
  label: '',
};

export default PasswordInput;

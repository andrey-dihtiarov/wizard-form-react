import { useState } from 'react';
import PropTypes from 'prop-types';

import InputContainer from '../InputContainer';
import { EyeCrossedIcon, EyeOpenIcon } from '../../icons';
import IconButton from '../../buttons/IconButton';

import styles from './PasswordInput.module.scss';

const PasswordInput = ({ field, form: { touched, errors }, label, ...props }) => {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const { name } = field;
  const isError = !!(touched[name] && errors[name]);

  const changePasswordVisibility = () => setPasswordShown(!isPasswordShown);

  return (
    <InputContainer label={label} field={field}>
      <div className={styles.wrapper}>
        <input
          className={`${styles.field} ${isError && styles.fieldError}`}
          type={isPasswordShown ? 'text' : 'password'}
          value={field.value || ''}
          {...field}
          {...props}
        />
        <IconButton onClick={changePasswordVisibility} className={styles.icon}>
          {isPasswordShown ? <EyeCrossedIcon /> : <EyeOpenIcon />}
        </IconButton>
      </div>
    </InputContainer>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
};

PasswordInput.defaultProps = {
  label: '',
};

export default PasswordInput;

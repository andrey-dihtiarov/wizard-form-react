import PropTypes from 'prop-types';

import InputContainer from '../InputContainer';

import styles from './TextInput.module.scss';

const TextInput = ({ field, form: { touched, errors }, label, ...props }) => {
  const { name } = field;
  const isError = !!(touched[name] && errors[name]);
  return (
    <InputContainer label={label} field={field}>
      <input
        className={`${styles.field} ${isError && styles.fieldError}`}
        type="text"
        {...field}
        {...props}
      />
    </InputContainer>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
};

export default TextInput;

import PropTypes from 'prop-types';

import InputContainer from '../InputContainer';
import Field from '../../Field';

const TextInput = ({ field, form: { touched, errors }, label, ...rest }) => {
  const { name } = field;
  const isError = !!(touched[name] && errors[name]);
  return (
    <InputContainer label={label} field={field}>
      <Field {...field} {...rest} isError={isError} />
    </InputContainer>
  );
};

TextInput.propTypes = {
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

TextInput.defaultProps = {
  label: '',
};

export default TextInput;

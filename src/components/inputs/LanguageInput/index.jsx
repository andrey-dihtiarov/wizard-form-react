import PropTypes from 'prop-types';
import Select from 'react-select';

import { LANGUAGES_LIST } from '../../../constants';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const selectboxList = Object.entries(LANGUAGES_LIST).map(([key, value]) => ({
  value: key,
  label: value,
}));

const LanguageInput = ({
  form: { touched, errors, setFieldValue, setFieldTouched },
  label,
  field,
}) => {
  const { name, value } = field;
  const isError = !!(touched[name] && errors[name]);
  return (
    <InputContainer field={field} label={label}>
      <Select
        label={label}
        options={selectboxList}
        required
        name={name}
        {...field}
        value={value}
        onChange={(val) => setFieldValue(name, val)}
        onBlur={() => setFieldTouched(name, true)}
        classNamePrefix={isError ? styles.selectError : styles.select}
        className={isError ? styles.selectError : styles.select}
      />
    </InputContainer>
  );
};

LanguageInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
};

LanguageInput.defaultProps = {
  label: '',
};

export default LanguageInput;
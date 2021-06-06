import PropTypes from 'prop-types';
import Select from 'react-select';

// import { LANGUAGES_LIST } from '../../../constants';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

// const selectboxList = Object.entries(LANGUAGES_LIST).map(([key, value]) => ({
//   value: key,
//   label: value,
// }));

const SelectboxInput = ({
  form: { touched, errors, setFieldValue, setFieldTouched },
  label,
  field,
  isMulti,
  valuesList,
}) => {
  const { name, value } = field;
  const isError = !!(touched[name] && errors[name]);
  return (
    <InputContainer field={field} label={label}>
      <Select
        label={label}
        options={valuesList}
        required
        name={name}
        {...field}
        value={value}
        onChange={(val) => setFieldValue(name, val)}
        onBlur={() => setFieldTouched(name, true)}
        classNamePrefix={isError ? styles.selectError : styles.select}
        className={isError ? styles.selectError : styles.select}
        isMulti={isMulti}
      />
    </InputContainer>
  );
};

SelectboxInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
  isMulti: PropTypes.bool,
  valuesList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.any,
    }),
  ).isRequired,
};

SelectboxInput.defaultProps = {
  label: '',
  isMulti: false,
};

export default SelectboxInput;

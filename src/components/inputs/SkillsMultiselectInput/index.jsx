import PropTypes from 'prop-types';
import Select from 'react-select';

import { SKILLS } from '../../../constants';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const selectboxValues = SKILLS.map((item) => ({
  value: item,
  label: item,
}));

const SkillsMultiselectInput = ({
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
        options={selectboxValues}
        required
        name={name}
        {...field}
        value={value}
        isMulti
        onChange={(val) => setFieldValue(name, val)}
        onBlur={() => setFieldTouched(name, true)}
        classNamePrefix={isError ? styles.selectError : styles.select}
        className={isError ? styles.selectError : styles.select}
      />
    </InputContainer>
  );
};

SkillsMultiselectInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
};

SkillsMultiselectInput.defaultProps = {
  label: '',
};

export default SkillsMultiselectInput;

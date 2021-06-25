import PropTypes from 'prop-types';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const RadioGroupInput = ({ values, field, form: { setFieldValue, setFieldTouched } }) => {
  const { name, value } = field;

  const onChange = ({ target: { value: v } }) => {
    setFieldValue(name, v);
    setFieldTouched(name, true);
  };

  return (
    <InputContainer field={field}>
      <RadioGroup name={name} value={value} onChange={onChange} className={styles.radioGroup}>
        {values.map((v) => (
          <FormControlLabel value={v} key={v} label={v} control={<Radio color="primary" />} />
        ))}
      </RadioGroup>
    </InputContainer>
  );
};

RadioGroupInput.propTypes = {
  values: PropTypes.array.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};

export default RadioGroupInput;

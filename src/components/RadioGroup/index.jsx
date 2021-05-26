import PropTypes from 'prop-types';
import { Field, useFormikContext } from 'formik';

import InputContainer from '../inputs/InputContainer';
import RadioInput from '../inputs/RadioInput';

import styles from './styles.module.scss';

const RadioGroup = ({ values, name }) => {
  const { setFieldValue } = useFormikContext();
  const field = { name };

  const onValueChange = (e) => setFieldValue(name, e.target.value);

  return (
    <InputContainer field={field} label="Gender">
      <div className={styles.radioGroup} onChange={onValueChange}>
        {values &&
          values.map((value) => (
            <Field name={name} key={value} value={value} label={value} component={RadioInput} />
          ))}
      </div>
    </InputContainer>
  );
};

RadioGroup.propTypes = {
  values: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default RadioGroup;

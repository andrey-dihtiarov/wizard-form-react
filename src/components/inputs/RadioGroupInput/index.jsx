import PropTypes from 'prop-types';
import { Field } from 'formik';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const RadioGroup = ({ values, name }) => {
  const field = { name };
  return (
    <InputContainer field={field} label="Gender">
      <div className={styles.radioGroup}>
        {values.map((value) => (
          <label htmlFor={value} key={value}>
            <Field type="radio" name={name} value={value} id={value} />
            {value}
          </label>
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

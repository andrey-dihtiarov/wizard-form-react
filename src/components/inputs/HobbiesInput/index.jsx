import PropTypes from 'prop-types';

import { HOBBIES } from '../../../constants';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const HobbiesInput = ({ form: { setFieldValue, setFieldTouched }, label, field }) => {
  const { name, value } = field;
  const onInputChange = (e) => {
    if (e.target.checked) {
      setFieldValue(name, [...value, e.target.value]);
    } else {
      setFieldValue(
        name,
        value.filter((item) => item !== e.target.value),
      );
    }
    setFieldTouched(name, true);
  };
  return (
    <InputContainer field={field} label={label}>
      <ul>
        {HOBBIES.map((item, index) => (
          <li key={item + index.toString()} className={styles.checkboxWrapper}>
            <label htmlFor={`hobbies_${index}`}>
              <input
                type="checkbox"
                id={`hobbies_${index}`}
                name={`hobbies_${index}`}
                value={item}
                onChange={onInputChange}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </InputContainer>
  );
};

HobbiesInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
};

HobbiesInput.defaultProps = {
  label: '',
};

export default HobbiesInput;

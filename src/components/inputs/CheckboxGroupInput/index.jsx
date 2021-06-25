import PropTypes from 'prop-types';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

import InputContainer from '../InputContainer';

const CheckboxGroupInput = ({ form: { setFieldValue, setFieldTouched }, label, field, values }) => {
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
      <FormGroup>
        {values.map((item, index) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={field.value.includes(item)}
                onChange={onInputChange}
                name={`${name}_${index}`}
                value={item}
                color="primary"
              />
            }
            label={item}
            key={item}
          />
        ))}
      </FormGroup>
    </InputContainer>
  );
};

CheckboxGroupInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
  values: PropTypes.array.isRequired,
};

CheckboxGroupInput.defaultProps = {
  label: '',
};

export default CheckboxGroupInput;

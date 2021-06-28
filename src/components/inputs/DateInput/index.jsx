import { useState } from 'react';
import 'date-fns';
import PropTypes from 'prop-types';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const INPUT_PROPS = {
  disableUnderline: true,
};

const DateInput = ({
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  label,
  ...rest
}) => {
  const { name, value } = field;
  const [selectedDate, setSelectedDate] = useState((value && new Date(value)) || null);
  const isError = !!(touched[name] && errors[name]);

  // TODO remove setFieldTouched
  const onDateChange = (val) => {
    if (Date.parse(val)) {
      setFieldTouched(name, true, true);
      setFieldValue(name, val && val.toISOString());
      setSelectedDate(val);
    }
  };

  const onDateBlur = () => setFieldTouched(name, true, true);

  return (
    <InputContainer label={label} field={field}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          className={`${styles.field} ${isError ? styles.fieldError : ''}`}
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          inputValue={undefined}
          value={selectedDate}
          onChange={onDateChange}
          onBlur={onDateBlur}
          invalidDateMessage={false}
          InputProps={INPUT_PROPS}
          disableFuture
          emptyLabel=""
          {...rest}
        />
      </MuiPickersUtilsProvider>
    </InputContainer>
  );
};

DateInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
};

DateInput.defaultProps = {
  label: '',
};

export default DateInput;

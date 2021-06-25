import PropTypes from 'prop-types';
import { Select, MenuItem, Chip } from '@material-ui/core';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 300,
    },
  },
};

const SelectboxInput = ({
  form: { touched, errors, setFieldValue, setFieldTouched },
  label,
  field,
  isMulti,
  valuesList,
}) => {
  const { name, value } = field;
  const isError = !!(touched[name] && errors[name]);

  const onValueChange = ({ target: { value: val } }) => setFieldValue(name, val);

  const onBlur = () => setFieldTouched(name, true);

  return (
    <InputContainer field={field} label={label}>
      {isMulti ? (
        <Select
          multiple
          value={value}
          onChange={onValueChange}
          onBlur={onBlur}
          disableUnderline
          className={`${styles.selectbox} ${isError ? styles.selectboxError : ''}`}
          MenuProps={MenuProps}
          renderValue={(selected) => (
            <div className={styles.chips}>
              {selected.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  className={styles.chip}
                  onMouseDown={(e) => e.stopPropagation()}
                />
              ))}
            </div>
          )}
        >
          {valuesList.map(({ value: itemVal, label: labelVal }) => (
            <MenuItem value={itemVal} key={labelVal}>
              {itemVal}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Select
          value={value}
          onChange={onValueChange}
          onBlur={onBlur}
          className={`${styles.selectbox} ${isError ? styles.selectboxError : ''}`}
          MenuProps={MenuProps}
          disableUnderline
        >
          {Object.values(
            valuesList.map(({ value: itemVal, label: labelVal }) => (
              <MenuItem value={itemVal} key={labelVal}>
                {itemVal}
              </MenuItem>
            )),
          )}
        </Select>
      )}
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

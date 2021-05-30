import { useState } from 'react';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';

import { ICONS } from '../../../constants';

import FaxInput from '../FaxInput';
import IconButton from '../../buttons/IconButton';
import InputContainer from '../InputContainer';
import Icon from '../../Icon';

import styles from './styles.module.scss';

const PhoneGroupInput = ({ maxNumbers }) => {
  const [field, , helpers] = useField('phoneNumbers');
  const [phoneNumbersCount, setPhoneNumbersCount] = useState(field.value.length);

  const onPhoneNumberAdd = () => setPhoneNumbersCount(phoneNumbersCount + 1);

  const onPhoneNumberRemove = (idx) => () => {
    helpers.setValue(field.value.filter((item, index) => idx !== index));
    setPhoneNumbersCount(phoneNumbersCount - 1);
  };

  return (
    <InputContainer field={field} className={styles.wrapper}>
      {Array.from({ length: phoneNumbersCount }).map((item, index) => (
        <div key={index.toString()} className={styles.fieldWrapper}>
          <Field
            phoneNumbersCount={phoneNumbersCount}
            name={`phoneNumbers[${index}]`}
            label={`Phone #${index + 1}`}
            component={FaxInput}
          />
          {phoneNumbersCount > 1 && (
            <IconButton
              type="button"
              icon={<Icon icon={ICONS.minus} />}
              onClick={onPhoneNumberRemove(index)}
              className={styles.minusButton}
            />
          )}
        </div>
      ))}
      {phoneNumbersCount < maxNumbers && (
        <IconButton type="button" icon={<Icon icon={ICONS.add} />} onClick={onPhoneNumberAdd}>
          add phone number
        </IconButton>
      )}
    </InputContainer>
  );
};

PhoneGroupInput.propTypes = {
  maxNumbers: PropTypes.number,
};

PhoneGroupInput.defaultProps = {
  maxNumbers: 3,
};

export default PhoneGroupInput;

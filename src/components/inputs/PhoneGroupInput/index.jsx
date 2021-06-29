import { useState } from 'react';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import { Button, IconButton, Tooltip } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

import FaxInput from '../FaxInput';

import styles from './styles.module.scss';

const PhoneGroupInput = ({ maxNumbers }) => {
  const [field, , helpers] = useField('phoneNumbers');
  const [phoneNumbersCount, setPhoneNumbersCount] = useState(1);

  const onPhoneNumberAdd = () => setPhoneNumbersCount(phoneNumbersCount + 1);

  const onPhoneNumberRemove = (idx) => () => {
    helpers.setValue(field.value.filter((item, index) => idx !== index));
    setPhoneNumbersCount(phoneNumbersCount - 1);
  };

  return (
    <div className={styles.wrapper}>
      {Array.from({ length: phoneNumbersCount }).map((item, index) => (
        <div key={index.toString()} className={styles.fieldWrapper}>
          <Field
            phoneNumbersCount={phoneNumbersCount}
            name={`phoneNumbers.${index}`}
            label={`Phone #${index + 1}`}
            component={FaxInput}
          />
          {phoneNumbersCount > 1 && (
            <Tooltip title="Remove Phone Number">
              <IconButton
                size="small"
                onClick={onPhoneNumberRemove(index)}
                className={styles.minusButton}
              >
                <Remove />
              </IconButton>
            </Tooltip>
          )}
        </div>
      ))}
      {phoneNumbersCount < maxNumbers && (
        <Button startIcon={<Add />} onClick={onPhoneNumberAdd} className={styles.addButton}>
          add phone number
        </Button>
      )}
    </div>
  );
};

PhoneGroupInput.propTypes = {
  maxNumbers: PropTypes.number,
};

PhoneGroupInput.defaultProps = {
  maxNumbers: 3,
};

export default PhoneGroupInput;

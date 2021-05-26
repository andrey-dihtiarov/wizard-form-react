import { useEffect, useRef } from 'react';
import places from 'places.js';

import InputContainer from '../InputContainer';

import styles from './styles.module.scss';

const AddressInput = ({ field, form: { touched, errors }, label, ...rest }) => {
  const addrInputRef = useRef(null);
  const placesAutocomplete = useRef(null);

  const { name } = field;
  const isError = !!(touched[name] && errors[name]);

  useEffect(() => {
    if (addrInputRef && !placesAutocomplete.current)
      placesAutocomplete.current = places({
        container: addrInputRef.current && addrInputRef.current,
      });
  }, [addrInputRef, placesAutocomplete]);

  return (
    <InputContainer field={field} label={label}>
      <input
        {...field}
        className={`${styles.field} ${isError && styles.fieldError}`}
        type="search"
        id="address-input"
        placeholder="Where are we going?"
        ref={addrInputRef}
        {...rest}
      />
    </InputContainer>
  );
};

export default AddressInput;

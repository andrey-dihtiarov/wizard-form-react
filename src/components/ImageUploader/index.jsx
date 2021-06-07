import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { ICONS } from '../../constants';

import IconButton from '../buttons/IconButton';

import styles from './styles.module.scss';
import InputContainer from '../inputs/InputContainer';

export function ImageUploader({
  label,
  onChange,
  className,
  field,
  form: { errors, setFieldValue, setFieldTouched },
  ...props
}) {
  const fileInputEl = useRef();
  const { name } = field;

  function onFileChangePopup() {
    if (fileInputEl && fileInputEl.current && fileInputEl.current.click()) {
      fileInputEl.current.click();
    }
  }

  async function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  async function onFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const img = await readFile(file);
      setFieldValue(name, img);
      setFieldTouched(name, true, true);
      if (errors[name]) {
        return;
      }
      onChange(img);
    }
  }

  return (
    <InputContainer className={className} field={field}>
      <input
        {...field}
        {...props}
        type="file"
        name={field.name}
        className={styles.input}
        onChange={onFileChange}
        ref={fileInputEl}
        accept=".jpg,.jpeg,.png,gif,.svg"
        value=""
      />
      <IconButton type="button" icon={ICONS.add} onClick={onFileChangePopup}>
        {label}
      </IconButton>
    </InputContainer>
  );
}

ImageUploader.prototype.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
};

ImageUploader.defaultProps = {
  name: '',
  onChange: () => {},
  label: 'Add Avatar',
  className: '',
};

export default ImageUploader;

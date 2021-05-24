import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { AddIcon } from '../icons';

import ButtonWithIcon from '../buttons/ButtonWithIcon';

import styles from './ImageUploader.module.scss';

export function ImageUploader({ label, onChange, name, className }) {
  const fileInputEl = useRef();

  function openFileUploadPopup() {
    if (fileInputEl && fileInputEl.current && fileInputEl.current.click()) {
      fileInputEl.current.click();
    }
  }

  async function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  }

  async function onFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const img = await readFile(file);
      onChange(img, name);
    }
  }

  return (
    <div className={className}>
      <input
        className={styles.input}
        type="file"
        accept=".jpg,.jpeg,.png,.svg"
        ref={fileInputEl}
        onChange={onFileUpload}
      />
      <ButtonWithIcon icon={AddIcon} onClick={openFileUploadPopup}>
        {label}
      </ButtonWithIcon>
    </div>
  );
}

ImageUploader.prototype.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
};

ImageUploader.defaultProps = {
  name: '',
  onChange: () => {},
  label: 'Add Avatar',
  className: '',
};

export default ImageUploader;

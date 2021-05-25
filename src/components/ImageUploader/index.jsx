import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { ICONS } from '../../constants';

import IconButton from '../buttons/IconButton';
import Icon from '../Icon';

import styles from './styles.module.scss';

export function ImageUploader({ label, onChange, name, className }) {
  const fileInputEl = useRef();

  function onFileChangePopup() {
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

  async function onFileChange(e) {
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
        onChange={onFileChange}
      />
      <IconButton icon={<Icon icon={ICONS.add} />} onClick={onFileChangePopup}>
        {label}
      </IconButton>
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

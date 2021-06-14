import { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ICONS } from '../../constants';

import IconButton from '../buttons/IconButton';

import InputContainer from '../inputs/InputContainer';
import CropModal from './CropModal';

import styles from './styles.module.scss';

export function ImageUploader({
  label,
  onChange,
  className,
  field,
  form: { errors, setFieldValue, setFieldTouched },
  ...props
}) {
  const [photo, setPhoto] = useState(null);
  const [photoBase64, setPhotoBase64] = useState(null);
  const [image, setImage] = useState();

  const [isCropperVisible, setIsCropperVisible] = useState(false);

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
      reader.onloadend = (e) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  const onFileChange = useCallback(
    (event) => {
      event.preventDefault();
      const [file] = event.target.files;
      const reader = new FileReader();

      reader.onloadend = () => {
        setPhoto(file);
        setPhotoBase64(reader.result);
        setFieldValue(name, file);
        setFieldTouched(name, true, true);
        setIsCropperVisible(true);
      };

      reader.readAsDataURL(file);
    },
    [name, setFieldTouched, setFieldValue],
  );

  const updateCroppedImageFile = useCallback(
    async (file) => {
      if (errors[name]) {
        setIsCropperVisible(false);
        return;
      }
      setPhoto(file);
      const img = await readFile(file);
      setFieldValue(name, img);
      setIsCropperVisible(false);
      onChange(img);
    },
    [errors, name, onChange, setFieldValue],
  );

  return (
    <InputContainer className={className} field={field}>
      <div className={styles.imageWrapper}>
        <img
          ref={(imageRef) => setImage(imageRef)}
          src={photo && URL.createObjectURL(photo)}
          alt={photo}
          className={styles.image}
        />
      </div>
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
      <IconButton
        type="button"
        icon={ICONS.add}
        onClick={onFileChangePopup}
        className={styles.addButton}
      >
        {label}
      </IconButton>
      <CropModal
        image={image}
        imageBase64={photoBase64}
        updateImageFile={updateCroppedImageFile}
        isVisible={isCropperVisible}
      />
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

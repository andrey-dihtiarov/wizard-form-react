import { useState } from 'react';
import { Field } from 'formik';

import TextInput from '../../inputs/TextInput';
import PasswordInput from '../../inputs/PasswordInput';
import Avatar from '../../Avatar';
import ImageUploader from '../../ImageUploader';

import styles from './styles.module.scss';

const AccountForm = () => {
  const [imageSrc, setImageSrc] = useState();

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <div className={styles.avatarContainer}>
          <Avatar image={imageSrc} />
          <Field
            name="avatar"
            className={styles.avatarButton}
            onChange={setImageSrc}
            component={ImageUploader}
          />
        </div>
        <div className={styles.fieldsContainer}>
          <div>
            <Field name="userName" label="User Name" component={TextInput} />
            <Field name="password" label="Password" component={PasswordInput} />
            <Field name="repeatPassword" label="Repeat Password" component={PasswordInput} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;

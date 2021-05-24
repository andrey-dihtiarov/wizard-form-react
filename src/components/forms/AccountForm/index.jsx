import { useState } from 'react';
import { Field } from 'formik';

import TextInput from '../../inputs/TextInput';
import PasswordInput from '../../inputs/PasswordInput';
import FlatButton from '../../buttons/FlatButton';
import Avatar from '../../Avatar';
import ImageUploader from '../../ImageUploader';

import classes from './AccountForm.module.scss';

const AccountForm = () => {
  const [imageSrc, setImageSrc] = useState();

  return (
    <div className={classes.form}>
      <div className={classes.formContainer}>
        <div className={classes.avatarContainer}>
          <Avatar image={imageSrc} />
          <ImageUploader className={classes.avatarButton} onChange={setImageSrc} />
        </div>
        <div className={classes.fieldsContainer}>
          <div>
            <Field name="userName" label="User Name" component={TextInput} />
            <Field name="password" label="Password" component={PasswordInput} />
            <Field name="repeatPassword" label="Repeat Password" component={PasswordInput} />
          </div>
          <div className={classes.buttonContainer}>
            <FlatButton>Forward</FlatButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;

import { useState } from 'react';
import { Field } from 'formik';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import TextInput from '../../inputs/TextInput';
import PasswordInput from '../../inputs/PasswordInput';
import Avatar from '../../Avatar';
import ImageUploader from '../../ImageUploader';
import FormikForm from '../../FormikForm';

import styles from './styles.module.scss';

const FILE_SIZE = 1024 * 1024;

const SUPPORTED_FORMATS = new Set([
  'image/jpg',
  'image/jpeg',
  'image/svg',
  'image/gif',
  'image/png',
]);

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'User Name is too short')
    .max(70, 'User Name is too long')
    .required('Required'),
  password: Yup.string()
    .required('Please, enter a password')
    .min(8, 'Password should be at least 8 characters long'),
  repeatPassword: Yup.string()
    .required('Please, repeat entered password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  avatar: Yup.mixed()
    .test('fileSize', 'File too large', (value) => (value ? value.size <= FILE_SIZE : true))
    .test('fileFormat', 'Unsupported Format', (value) =>
      value ? SUPPORTED_FORMATS.has(value.type) : true,
    ),
});

const AccountForm = ({ children, onSubmit }) => {
  const [imageSrc, setImageSrc] = useState();
  const { userName, password, repeatPassword, avatar } = useSelector((state) => state.user);
  const initValues = { userName, password, repeatPassword, avatar };
  return (
    <FormikForm
      initialValues={initValues}
      validationSchema={validationSchema}
      submit={onSubmit}
      className={styles.form}
    >
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
      {children}
    </FormikForm>
  );
};

AccountForm.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

AccountForm.defaultProps = {
  children: null,
};

export default AccountForm;

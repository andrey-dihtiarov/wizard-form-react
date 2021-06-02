import { useState } from 'react';
import { Field, Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { MEGABYTE } from '../../../../constants';

import TextInput from '../../../../components/inputs/TextInput';
import PasswordInput from '../../../../components/inputs/PasswordInput';
import Avatar from '../../../../components/Avatar';
import ImageUploader from '../../../../components/ImageUploader';
import NavButtons from '../../../../components/NavButtons';

import styles from './styles.module.scss';

const MAX_IMG_SIZE = MEGABYTE;

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
    .test('fileSize', 'File too large', (value) => {
      if (value) {
        const { size } = value;
        return size <= MAX_IMG_SIZE;
      }
      return true;
    })
    .test('fileFormat', 'Unsupported Format', (value) => {
      if (value) {
        const { type } = value;
        return SUPPORTED_FORMATS.has(type);
      }
      return true;
    }),
});

const AccountForm = ({ onBack, onNext, isFirst, isLast }) => {
  const [imageSrc, setImageSrc] = useState();
  const { userName, password, repeatPassword, avatar } = useSelector((state) => state.form);
  const initValues = { userName, password, repeatPassword, avatar };

  const onSubmit = (values) => onNext(values);

  return (
    <Formik initialValues={initValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <div className={styles.formInner}>
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
        <div className={styles.buttonsWrapper}>
          <NavButtons isFirst={isFirst} isLast={isLast} onBack={onBack} />
        </div>
      </Form>
    </Formik>
  );
};

AccountForm.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

AccountForm.defaultProps = {
  onBack: () => {},
};

export default AccountForm;

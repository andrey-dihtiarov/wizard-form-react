import PropTypes from 'prop-types';
import { Form as FormikForm, Formik } from 'formik';
import { subYears } from 'date-fns';
import * as Yup from 'yup';

import AccountForm from '../../../components/forms/AccountForm';
import ProfileForm from '../../../components/forms/ProfileForm';
import ContactsForm from '../../../components/forms/ContactsForm';
import CapabilitiesForm from '../../../components/forms/CapabilitiesForm';
import Wizard from '../../../components/StepWizard/Wizard';

import styles from './styles.module.scss';

export const STEPS = [
  {
    component: AccountForm,
    slug: 'account',
  },
  {
    component: ProfileForm,
    slug: 'profile',
  },
  {
    component: ContactsForm,
    slug: 'contacts',
  },
  {
    component: CapabilitiesForm,
    slug: 'capabilities',
  },
];

const FILE_SIZE = 1024 * 1024;

const SUPPORTED_FORMATS = new Set([
  'image/jpg',
  'image/jpeg',
  'image/svg',
  'image/gif',
  'image/png',
]);

const initValues = {
  userName: '',
  password: '',
  repeatPassword: '',
  avatar: null,
  birthDate: '',
  gender: '',
  address: '',
};

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
  birthDate: Yup.date().max(subYears(Date.now(), 18), 'User must be older 18').required('Required'),
  gender: Yup.string().oneOf(['Male', 'Female']).required('Required'),
});

const UserFormPage = ({ isEditing }) => (
  <div className={styles.wrapper}>
    {isEditing ? 'Edit User Page' : 'New User Pages'}
    <Formik initialValues={initValues} onSubmit={() => {}} validationSchema={validationSchema}>
      <FormikForm>
        <Wizard steps={STEPS} />
      </FormikForm>
    </Formik>
  </div>
);

UserFormPage.propTypes = {
  isEditing: PropTypes.bool,
};

UserFormPage.defaultProps = {
  isEditing: false,
};

export default UserFormPage;

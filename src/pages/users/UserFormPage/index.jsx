import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Form as FormikForm, Formik } from 'formik';
import { subYears } from 'date-fns';
import * as Yup from 'yup';

import { GENDER_INPUT_VALUES } from '../../../constants';

import AccountForm from '../../../components/forms/AccountForm';
import ProfileForm from '../../../components/forms/ProfileForm';
import ContactsForm from '../../../components/forms/ContactsForm';
import CapabilitiesForm from '../../../components/forms/CapabilitiesForm';

import styles from './styles.module.scss';

export const FORMS = [
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
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  address: '',
  gender: '',
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
  // TODO custom validation
  firstName: Yup.string()
    .min(2, 'User Name is too short')
    .max(70, 'User Name is too long')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'User Name Too Short')
    .max(70, 'User Name Too Long')
    .required('Required'),
  email: Yup.string().email('Incorrect email format').required('Required'),
  // TODO Support timezones
  birthDate: Yup.date().max(subYears(Date.now(), 18), 'User must be older 18').required('Required'),
  gender: Yup.string().oneOf(GENDER_INPUT_VALUES).required('Required'),
});

const UserFormPage = ({ isEditing }) => {
  const { path } = useRouteMatch();
  return (
    <div className={styles.wrapper}>
      {isEditing ? 'Edit User Page' : 'New User Pages'}
      <Formik initialValues={initValues} onSubmit={() => {}} validationSchema={validationSchema}>
        <FormikForm>
          <Switch>
            {FORMS.map(({ component: Form, slug }) => (
              <Route key={slug} exact path={`${path}/${slug}`} component={Form} />
            ))}
          </Switch>
        </FormikForm>
      </Formik>
    </div>
  );
};

UserFormPage.propTypes = {
  isEditing: PropTypes.bool,
};

UserFormPage.defaultProps = {
  isEditing: false,
};

export default UserFormPage;

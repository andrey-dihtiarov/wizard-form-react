import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form as FormikForm, Formik } from 'formik';
import * as Yup from 'yup';

import AccountForm from '../../../components/forms/AccountForm';
import ProfileForm from '../../../components/forms/ProfileForm';
import ContactsForm from '../../../components/forms/ContactsForm';
import CapabilitiesForm from '../../../components/forms/CapabilitiesForm';

import classes from './UserFormPage.module.scss';

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
});
const UserFormPage = ({ isEditing }) => {
  const { path } = useRouteMatch();
  return (
    <div className={classes.wrapper}>
      {isEditing ? 'Edit User Page' : 'New User Pages'}
      <Formik
        initialValues={{ userName: '', password: '', repeatPassword: '' }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
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

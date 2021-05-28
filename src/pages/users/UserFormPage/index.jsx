import PropTypes from 'prop-types';

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
    title: 'Account',
  },
  {
    component: ProfileForm,
    slug: 'profile',
    title: 'Profile',
  },
  {
    component: ContactsForm,
    slug: 'contacts',
    title: 'Contacts',
  },
  {
    component: CapabilitiesForm,
    slug: 'capabilities',
    title: 'Capabilities',
  },
];

const UserFormPage = ({ isEditing }) => (
  <div className={styles.wrapper}>
    {isEditing ? 'Edit User Page' : 'New User Pages'}
    <Wizard steps={STEPS} />
  </div>
);

UserFormPage.propTypes = {
  isEditing: PropTypes.bool,
};

UserFormPage.defaultProps = {
  isEditing: false,
};

export default UserFormPage;

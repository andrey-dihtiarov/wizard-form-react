import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { updateUser } from '../../../store/user';

import AccountForm from '../../../components/forms/AccountForm';
import ProfileForm from '../../../components/forms/ProfileForm';
import ContactsForm from '../../../components/forms/ContactsForm';
import CapabilitiesForm from '../../../components/forms/CapabilitiesForm';
import Wizard from '../../../components/StepWizard/Wizard';

import styles from './styles.module.scss';
import { setStep } from '../../../store/wizard';

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

const UserFormPage = ({ isEditing }) => {
  const dispatch = useDispatch();
  const onForward = (values, step) => {
    dispatch(updateUser(values));
    dispatch(setStep(step));
  };
  return (
    <div className={styles.wrapper}>
      {isEditing ? 'Edit User Page' : 'New User Pages'}
      <Wizard steps={STEPS} onForward={onForward} />
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

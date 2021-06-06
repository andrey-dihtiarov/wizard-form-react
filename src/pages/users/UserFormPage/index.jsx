import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { updateFormData } from '../../../store/form';

import AccountForm from './AccountForm';
import ProfileForm from './ProfileForm';
import ContactsForm from './ContactsForm';
import CapabilitiesForm from './CapabilitiesForm';
import StepWizard from '../../../components/StepWizard';

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

const UserFormPage = ({ isEditing }) => {
  const dispatch = useDispatch();
  const onForward = (values) => dispatch(updateFormData(values));
  return (
    <div className={styles.wrapper}>
      {isEditing ? 'Edit User Page' : 'New User Pages'}
      <StepWizard steps={STEPS} onForward={onForward} />
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

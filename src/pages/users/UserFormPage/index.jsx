import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchFormData, updateFormData } from '../../../store/form';
import { addUser } from '../../../store/user';
import { ROUTES } from '../../../constants';

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
  const history = useHistory();

  const onForward = (values) => dispatch(updateFormData(values));

  const onFinish = (values) => {
    dispatch(addUser(values));
    history.push(ROUTES.users);
  };

  useEffect(() => {
    dispatch(fetchFormData());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {isEditing ? 'Edit User Page' : 'New User Pages'}
      <StepWizard steps={STEPS} onForward={onForward} onFinish={onFinish} />
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

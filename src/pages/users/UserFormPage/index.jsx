import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { fetchFormData, updateFormData } from '../../../store/form';
import { addUser, updateUser, fetchUser } from '../../../store/user';
import { ROUTES } from '../../../constants';

import AccountForm from './AccountForm';
import ProfileForm from './ProfileForm';
import ContactsForm from './ContactsForm';
import CapabilitiesForm from './CapabilitiesForm';
import StepWizard from '../../../components/StepWizard';
import PageLayout from '../../../components/layouts/PageLayout';

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

// TODO rename component to UserStepWizard
const UserFormPage = ({ isEditing }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const user = useSelector((state) => (isEditing ? state.user.user : state.form.user));

  const onForward = (values) => dispatch(updateFormData(values));

  const onFinish = (values) => {
    if (isEditing) {
      return dispatch(updateUser(values, id));
    }
    dispatch(addUser(values));
    return history.push(ROUTES.users);
  };

  const [contentLoaded, setContentLoaded] = useState(false);

  const loadData = useCallback(async () => {
    if (isEditing) {
      await Promise.all([dispatch(fetchFormData()), dispatch(fetchUser(id))]);
      return setContentLoaded(true);
    }
    dispatch(fetchFormData());
    return setContentLoaded(true);
  }, [dispatch, id, isEditing]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // TODO show StepWizard till loading and block interaction on page loading
  return (
    <PageLayout title="New User Page">
      <StepWizard
        data={contentLoaded && user}
        steps={STEPS}
        onForward={onForward}
        onFinish={onFinish}
        isEditing={isEditing}
      />
    </PageLayout>
  );
};

UserFormPage.propTypes = {
  isEditing: PropTypes.bool,
};

UserFormPage.defaultProps = {
  isEditing: false,
};

export default UserFormPage;

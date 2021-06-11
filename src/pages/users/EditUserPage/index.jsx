import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchFormData } from '../../../store/form';
import { updateUser, fetchUser } from '../../../store/user';

import PageLayout from '../../../components/layouts/PageLayout';
import UserStepWizard from '../../../components/UserStepWizard';

const EditUserPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user.user);

  const onFinish = (values) => dispatch(updateUser(values, id));

  const loadData = useCallback(async () => {
    await Promise.all([dispatch(fetchFormData()), dispatch(fetchUser(id))]);
  }, [dispatch, id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <PageLayout title="Edit User Page">
      <UserStepWizard data={user} onFinish={onFinish} isEditing />
    </PageLayout>
  );
};

export default EditUserPage;

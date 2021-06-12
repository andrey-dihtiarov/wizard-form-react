import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateUser, fetchUser } from '../../../store/user';

import PageLayout from '../../../components/layouts/PageLayout';
import UserStepWizard from '../../../components/UserStepWizard';

const EditUserPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user.user);

  const onFinish = (values) => dispatch(updateUser(values, id));

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  return (
    <PageLayout title="Edit User Page">
      {user && <UserStepWizard data={user} onFinish={onFinish} isEditing />}
    </PageLayout>
  );
};

export default EditUserPage;

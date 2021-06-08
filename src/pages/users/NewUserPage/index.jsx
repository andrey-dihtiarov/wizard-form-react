import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { clearFormData, fetchFormData, updateFormData } from '../../../store/form';
import { addUser } from '../../../store/user';
import { ROUTES } from '../../../constants';

import PageLayout from '../../../components/layouts/PageLayout';
import UserStepWizard from '../../../components/UserStepWizard';

const NewUserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.form.user);

  const onForward = (values) => dispatch(updateFormData(values));

  const onFinish = (values) => {
    dispatch(addUser(values));
    dispatch(clearFormData());
    history.push(ROUTES.users);
  };

  const loadData = useCallback(async () => {
    dispatch(fetchFormData());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <PageLayout title="New User Page">
      <UserStepWizard data={user} onForward={onForward} onFinish={onFinish} />
    </PageLayout>
  );
};

export default NewUserPage;

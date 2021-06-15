import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../../constants';

import { deleteUser, fetchUsers } from '../../../store/user';

import UsersTable from './UsersTable';
import PageLayout from '../../../components/layouts/PageLayout';

const UsersPage = () => {
  const history = useHistory();
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onUserEdit = (id) => () => history.push(ROUTES.user(id));

  const onUserDelete = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, users]);

  return (
    <PageLayout title="List of users">
      <UsersTable users={users} onUserEdit={onUserEdit} onUserDelete={onUserDelete} />
    </PageLayout>
  );
};

export default UsersPage;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../../constants';

import { deleteUser, fetchUsers } from '../../../store/user';

import UsersTable from './UsersTable';

import styles from './styles.module.scss';

const UsersPage = () => {
  const history = useHistory();
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onUserEdit = (id) => () => history.push(ROUTES.user.replace(':id', id));

  const onUserDelete = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, users]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>List Of Users</div>
      <UsersTable users={users} onUserEdit={onUserEdit} onUserDelete={onUserDelete} />
    </div>
  );
};

export default UsersPage;

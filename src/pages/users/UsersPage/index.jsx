import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../../constants';

import { fetchUsers } from '../../../store/user';

import UsersTable from './UsersTable';

import styles from './styles.module.scss';

const UsersPage = () => {
  const history = useHistory();
  const onUserEdit = (id) => () => history.push(ROUTES.user.replace(':id', id));
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>List Of Users</div>
      <UsersTable users={users} onUserEdit={onUserEdit} />
    </div>
  );
};

export default UsersPage;

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../../constants';

import { deleteUser, fetchUsers, generateUsers, searchUsers } from '../../../store/user';

import styles from './styles.module.scss';

import UsersTable from './UsersTable';
import PageLayout from '../../../components/layouts/PageLayout';
import FlatButton from '../../../components/buttons/FlatButton';
import Search from '../../../components/Search';

const UsersPage = () => {
  const history = useHistory();
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onUserEdit = (id) => () => history.push(ROUTES.user.replace(':id', id));

  const onUserDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const onGenerateClick = () => {
    dispatch(generateUsers());
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onSearch = useCallback(
    (query) => {
      dispatch(searchUsers(query));
    },
    [dispatch],
  );

  return (
    <PageLayout title="List of users">
      <Search
        onSearch={onSearch}
        className={styles.search}
        placeholder="Search users by first name or last name"
      />
      <UsersTable users={users} onUserEdit={onUserEdit} onUserDelete={onUserDelete} />
      <div className={styles.buttonWrapper}>
        <FlatButton onClick={onGenerateClick}>Generate Users</FlatButton>
      </div>
    </PageLayout>
  );
};

export default UsersPage;

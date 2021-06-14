import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useQuery from '../../../hooks/useQuery';
import Pagination from '../../../components/Pagination';

import { ROUTES } from '../../../constants';

import { deleteUser, generateUsers, fetchUsers } from '../../../store/user';

import UsersTable from './UsersTable';
import PageLayout from '../../../components/layouts/PageLayout';
import FlatButton from '../../../components/buttons/FlatButton';
import Search from '../../../components/Search';

import styles from './styles.module.scss';

const SKIP = 0;
const LIMIT = 5;

const UsersPage = () => {
  const { users, totalUsers } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get('search') || '';

  const onUserEdit = (id) => () => history.push(ROUTES.user.replace(':id', id));

  const onUserDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const onGenerateClick = () => {
    dispatch(generateUsers({ skip: SKIP, limit: LIMIT }));
  };

  const onNavigation = useCallback(
    (skip, limit) => {
      dispatch(fetchUsers({ skip, limit, query: searchQuery }));
    },
    [dispatch, searchQuery],
  );

  return (
    <PageLayout title="List of users">
      <Search
        className={styles.search}
        searchQuery={searchQuery}
        placeholder="Search users by first name or last name"
      />
      <UsersTable users={users} onUserEdit={onUserEdit} onUserDelete={onUserDelete} />
      <div className={styles.buttonWrapper}>
        <FlatButton onClick={onGenerateClick}>Generate Users</FlatButton>
        <Pagination request={onNavigation} total={totalUsers} skip={SKIP} limit={LIMIT} />
      </div>
    </PageLayout>
  );
};

export default UsersPage;

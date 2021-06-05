import { useHistory } from 'react-router-dom';

import UsersTable from './UsersTable';

import { users } from '../../../mocks';

import styles from './styles.module.scss';
import { ROUTES } from '../../../constants';

const UsersPage = () => {
  const history = useHistory();
  const onUserEdit = (id) => () => history.push(ROUTES.user.replace(':id', id));
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>List Of Users</div>
      <UsersTable users={users} onUserEdit={onUserEdit} />
    </div>
  );
};

export default UsersPage;

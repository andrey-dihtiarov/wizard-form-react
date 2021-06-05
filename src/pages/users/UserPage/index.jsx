import { useParams } from 'react-router-dom';

import UserProfile from './UserProfile';

import { users } from '../../../mocks';
import { ICONS, ROUTES } from '../../../constants';

import LinkButton from '../../../components/buttons/LinkButton';
import Icon from '../../../components/Icon';

import styles from './styles.module.scss';

const UsersPage = () => {
  const { id } = useParams();
  // TODO remove mocks
  const user = users.find((u) => u.id === id);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.buttonWrapper}>
          <LinkButton
            to={ROUTES.users}
            className={styles.button}
            icon={<Icon icon={ICONS.chevronLeft} className={styles.buttonIcon} />}
          >
            User List
          </LinkButton>
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{user.userName}</div>
        </div>
      </div>
      <UserProfile user={user} />
    </div>
  );
};

export default UsersPage;

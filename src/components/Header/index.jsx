import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../constants';

import LinkButton from '../buttons/LinkButton';
import { UserIcon, UsersIcon } from '../icons';

import styles from './Header.module.scss';

const Header = () => {
  const history = useHistory();

  const onUserClick = () => history.push(`${ROUTES.newUser}${ROUTES.accountForm}`);
  const onUsersClick = () => history.push(ROUTES.users);
  const onLogoClick = () => history.push(ROUTES.home);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={onLogoClick} role="presentation">
          Remake
        </div>
        <div className={styles.nav}>
          <LinkButton icon={UserIcon} onClick={onUserClick} className={styles.navButton}>
            Add new user
          </LinkButton>
          <LinkButton icon={UsersIcon} onClick={onUsersClick} className={styles.navButton}>
            List of users
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Link } from 'react-router-dom';

import { ICONS, ROUTES } from '../../constants';

import LinkButton from '../buttons/LinkButton';
import Icon from '../Icon';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerInner}>
      <Link to={ROUTES.home} className={styles.logo}>
        Remake
      </Link>
      <div className={styles.nav}>
        <LinkButton
          to={`${ROUTES.newUser}${ROUTES.accountForm}`}
          icon={<Icon icon={ICONS.user} />}
          className={styles.navButton}
        >
          Add new user
        </LinkButton>
        <LinkButton
          to={ROUTES.users}
          icon={<Icon icon={ICONS.userFriends} />}
          className={styles.navButton}
        >
          List of users
        </LinkButton>
      </div>
    </div>
  </div>
);

export default Header;

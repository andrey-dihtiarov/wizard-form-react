import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';

import LinkButton from '../buttons/LinkButton';
import { UserIcon, UsersIcon } from '../icons';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <Link to={ROUTES.home} className={styles.logo}>
        Remake
      </Link>
      <div className={styles.nav}>
        <Link
          to={`${ROUTES.newUser}${ROUTES.accountForm}`}
          icon={UserIcon}
          className={styles.navButton}
          component={LinkButton}
        />
        <Link
          to={ROUTES.users}
          icon={UsersIcon}
          className={styles.navButton}
          component={LinkButton}
        />
      </div>
    </div>
  </div>
);

export default Header;

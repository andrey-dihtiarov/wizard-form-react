import { Link, NavLink } from 'react-router-dom';
import { Button, AppBar, Tooltip } from '@material-ui/core';
import { PersonAdd, PeopleAlt } from '@material-ui/icons';

import { ROUTES } from '../../constants';

import styles from './styles.module.scss';

const Header = () => (
  <AppBar position="static" className={styles.header}>
    <div className={styles.headerInner}>
      <Tooltip title="Home Page">
        <Link to={ROUTES.home} className={styles.logo}>
          Remake
        </Link>
      </Tooltip>
      <div className={styles.nav}>
        <Button
          component={NavLink}
          startIcon={<PersonAdd />}
          to={ROUTES.newUser}
          className={styles.navButton}
          activeClassName={styles.navButtonActive}
        >
          Add new user
        </Button>
        <Button
          component={NavLink}
          startIcon={<PeopleAlt />}
          to={ROUTES.users}
          className={styles.navButton}
          activeClassName={styles.navButtonActive}
          exact
        >
          List of users
        </Button>
      </div>
    </div>
  </AppBar>
);

export default Header;

import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../constants';

import LinkButton from '../buttons/LinkButton';
import { UserIcon, UsersIcon } from '../icons';

import classes from './Header.module.scss';

const Header = () => {
  const history = useHistory();

  const onUserClick = () => history.push(`${ROUTES.newUser}${ROUTES.accountForm}`);
  const onUsersClick = () => history.push(ROUTES.users);
  const onLogoClick = () => history.push(ROUTES.home);

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo} onClick={onLogoClick} role="presentation">
          Remake
        </div>
        <div className={classes.nav}>
          <LinkButton icon={UserIcon} onClick={onUserClick} className={classes.nav_button}>
            Add new user
          </LinkButton>
          <LinkButton icon={UsersIcon} onClick={onUsersClick} className={classes.nav_button}>
            List of users
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Header;

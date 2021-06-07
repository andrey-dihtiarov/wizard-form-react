import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchUser } from '../../../store/user';

import { ICONS, ROUTES } from '../../../constants';

import UserProfile from './UserProfile';
import LinkButton from '../../../components/buttons/LinkButton';

import styles from './styles.module.scss';

const UsersPage = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  return (
    <>
      {user && (
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.buttonWrapper}>
              <LinkButton
                to={ROUTES.users}
                className={styles.button}
                width={24}
                height={24}
                icon={ICONS.chevronLeft}
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
      )}
    </>
  );
};

export default UsersPage;

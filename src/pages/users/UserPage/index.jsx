import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import { fetchUser } from '../../../store/user';

import { ROUTES } from '../../../constants';

import UserProfile from './UserProfile';
import PageLayout from '../../../components/layouts/PageLayout';
import Loader from '../../../components/Loader';

import styles from './styles.module.scss';

const UserPage = () => {
  const { id } = useParams();
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { userName } = user || {};

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  return (
    <PageLayout title={userName || ''}>
      {isLoading && <Loader />}
      {user && (
        <>
          <Button
            component={NavLink}
            to={ROUTES.users}
            className={styles.button}
            startIcon={<ChevronLeft />}
          >
            Users List
          </Button>
          <UserProfile user={user} />
        </>
      )}
    </PageLayout>
  );
};

export default UserPage;

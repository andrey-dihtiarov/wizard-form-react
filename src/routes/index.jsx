import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import history from './history';
import * as ROUTES from '../constants/routes';

import NewUserPage from '../pages/users/NewUserPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import UserPage from '../pages/users/UserPage';
import UsersPage from '../pages/users/UsersPage';
import EditUserPage from '../pages/users/EditUserPage';
import MainLayout from '../components/layouts/MainLayout';

const Routes = () => (
  <Router history={history}>
    <MainLayout>
      <Switch>
        <Route exact path={ROUTES.ROUTE_HOME} component={HomePage} />
        <Route exact path={ROUTES.ROUTE_USER} component={UserPage} />
        <Route exact path={ROUTES.ROUTE_USERS} component={UsersPage} />
        <Route path={ROUTES.ROUTE_NEW_USER} component={NewUserPage} />
        <Route path={ROUTES.ROUTE_EDIT_USER} component={EditUserPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;

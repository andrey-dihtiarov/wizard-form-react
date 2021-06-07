import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { ROUTES } from '../constants';

import UserFormPage from '../pages/users/UserFormPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import UserPage from '../pages/users/UserPage';
import UsersPage from '../pages/users/UsersPage';
import MainLayout from '../components/layouts/MainLayout';

const Routes = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.newUser} component={UserFormPage} />Z
        <Route exact path={ROUTES.user} component={UserPage} />
        <Route exact path={ROUTES.users} component={UsersPage} />
        <Route
          path={ROUTES.editUser}
          component={(props) => <UserFormPage isEditing {...props} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Routes;

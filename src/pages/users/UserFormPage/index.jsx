import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FORMS } from '../../../constants';

const UserFormPage = ({ isEditing }) => {
  const { path } = useRouteMatch();
  return (
    <div>
      {isEditing ? 'Edit User Page' : 'New User Page'}
      <div>
        <Switch>
          {FORMS.map(({ component: Form, route, form }) => (
            <Route key={form} exact path={`${path}/${route}`} component={Form} />
          ))}
        </Switch>
      </div>
    </div>
  );
};

UserFormPage.propTypes = {
  isEditing: PropTypes.bool,
};

UserFormPage.defaultProps = {
  isEditing: false,
};

export default UserFormPage;

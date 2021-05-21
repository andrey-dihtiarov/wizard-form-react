import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AccountForm from '../../../components/forms/AccountForm';
import ProfileForm from '../../../components/forms/ProfileForm';
import ContactsForm from '../../../components/forms/ContactsForm';
import CapabilitiesForm from '../../../components/forms/CapabilitiesForm';

export const FORMS = [
  {
    component: AccountForm,
    slug: 'account',
  },
  {
    component: ProfileForm,
    slug: 'profile',
  },
  {
    component: ContactsForm,
    slug: 'contacts',
  },
  {
    component: CapabilitiesForm,
    slug: 'capabilities',
  },
];

const UserFormPage = ({ isEditing }) => {
  const { path } = useRouteMatch();
  return (
    <div>
      {isEditing ? 'Edit User Page' : 'New User Page'}
      <div>
        <Switch>
          {FORMS.map(({ component: Form, slug }) => (
            <Route key={slug} exact path={`${path}/${slug}`} component={Form} />
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

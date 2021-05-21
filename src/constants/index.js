import AccountForm from '../components/forms/AccountForm';
import ProfileForm from '../components/forms/ProfileForm';
import ContactsForm from '../components/forms/ContactsForm';
import CapabilitiesForm from '../components/forms/CapabilitiesForm';

export const FORMS = [
  {
    component: AccountForm,
    route: 'account',
    form: 'Account',
  },
  {
    component: ProfileForm,
    route: 'profile',
    form: 'Profile',
  },
  {
    component: ContactsForm,
    route: 'contacts',
    form: 'Contacts',
  },
  {
    component: CapabilitiesForm,
    route: 'capabilities',
    form: 'Capabilities',
  },
];

export const ROUTES = {
  home: '/',
  user: '/users/:id',
  users: '/users',
  newUser: '/users/new',
  editUser: '/users/:id/edit',
};

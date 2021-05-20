import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { FORMS } from '../../../constants/general';

const EditUserPage = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      Edit User Page
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

export default EditUserPage;

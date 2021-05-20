import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { FORMS } from '../../../constants/general';

const NewUserPage = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      New User Page
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

export default NewUserPage;

import PropTypes from 'prop-types';

import { Link, useRouteMatch, useParams } from 'react-router-dom';

const Nav = ({ children, computedSlug }) => {
  const { path } = useRouteMatch();
  const { slug } = useParams();

  const backUrl = path.replace(':slug', computedSlug(slug));

  return <Link to={backUrl}>{children}</Link>;
};

Nav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  computedSlug: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  children: 'Link',
};

export default Nav;

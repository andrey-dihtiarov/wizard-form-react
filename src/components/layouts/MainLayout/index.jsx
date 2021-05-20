import PropTypes from 'prop-types';

import Header from '../../Header';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;

import PropTypes from 'prop-types';

import Header from '../../Header';

import classes from './MainLayout.module.scss';

const MainLayout = ({ children }) => (
  <div className={classes.layout}>
    <Header />
    <div className={classes.container}>{children}</div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

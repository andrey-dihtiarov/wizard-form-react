import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const LinkButton = ({ icon, className, children, to, ...props }) => (
  <NavLink to={to} className={`${styles.button} ${className}`} {...props}>
    {icon && <span className={styles.buttonIcon}>{icon}</span>} {children}
  </NavLink>
);

LinkButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.node,
};

LinkButton.defaultProps = {
  children: 'Link Button',
  className: '',
  to: '',
  icon: null,
};

export default LinkButton;

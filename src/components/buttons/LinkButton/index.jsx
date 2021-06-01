import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const LinkButton = ({ icon, className, children, ...rest }) => (
  <NavLink className={`${styles.button} ${className}`} {...rest}>
    {icon && <span className={styles.buttonIcon}>{icon}</span>} {children}
  </NavLink>
);

LinkButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
};

LinkButton.defaultProps = {
  children: 'Link Button',
  className: '',
  icon: null,
};

export default LinkButton;

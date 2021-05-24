import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './LinkButton.module.scss';

const LinkButton = ({ icon: Icon, className, children, to, ...props }) => (
  <Link to={to} className={`${styles.button} ${className}`} {...props}>
    {Icon && <Icon className={styles.buttonIcon} />} {children}
  </Link>
);

LinkButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};

LinkButton.defaultProps = {
  children: 'Link Button',
  className: '',
  to: '',
};

export default LinkButton;

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

// TODO make button rounded
const IconButton = ({ icon, className, children, ...props }) => (
  <button className={`${styles.button} ${className}`} {...props}>
    {icon && <span className={styles.buttonIcon}>{icon}</span>} {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
};

IconButton.defaultProps = {
  children: null,
  className: '',
  icon: null,
};

export default IconButton;

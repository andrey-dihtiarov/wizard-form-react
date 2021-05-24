import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';

const IconButton = ({ icon: Icon, className, children, ...props }) => (
  <button className={`${styles.button} ${className}`} {...props}>
    {Icon && <Icon className={styles.buttonIcon} />} {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  children: null,
  className: '',
};

export default IconButton;

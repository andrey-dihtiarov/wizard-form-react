import PropTypes from 'prop-types';

import styles from './LinkButton.module.scss';

const LinkButton = ({ icon: Icon, className, type, children, ...props }) => (
  <button type={type} className={`${styles.button} ${className}`} {...props}>
    {Icon && <Icon className={styles.buttonIcon} />} {children}
  </button>
);

LinkButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

LinkButton.defaultProps = {
  children: 'Link Button',
  className: '',
};

export default LinkButton;

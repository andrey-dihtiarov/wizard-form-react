import PropTypes from 'prop-types';

import styles from './LinkButton.module.scss';

const LinkButton = ({ icon: Icon, className, children, ...props }) => (
  <a className={`${styles.button} ${className}`} {...props}>
    {Icon && <Icon className={styles.buttonIcon} />} {children}
  </a>
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

import PropTypes from 'prop-types';

import styles from './ButtonWithIcon.module.scss';

const ButtonWithIcon = ({ icon: Icon, className, children, ...props }) => (
  <button type="button" className={`${styles.button} ${className}`} {...props}>
    {Icon && <Icon className={styles.buttonIcon} />} {children}
  </button>
);

ButtonWithIcon.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

ButtonWithIcon.defaultProps = {
  children: 'Button With Icon',
  className: '',
};

export default ButtonWithIcon;

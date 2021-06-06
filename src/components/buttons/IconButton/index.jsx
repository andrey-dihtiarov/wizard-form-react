import PropTypes from 'prop-types';

import Icon from '../../Icon';

import styles from './styles.module.scss';

const IconButton = ({ icon, className, children, ...props }) => (
  <button className={`${styles.button} ${className}`} {...props}>
    {icon && <Icon icon={icon} className={styles.buttonIcon} />}
    {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
};

IconButton.defaultProps = {
  children: null,
  className: '',
  icon: '',
};

export default IconButton;

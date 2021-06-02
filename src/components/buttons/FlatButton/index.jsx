import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ButtonVariants = ['primary', 'cancel', 'success'];

const FlatButton = ({ variant, children, className, ...props }) => (
  <button className={`${styles.button} ${styles[variant]} ${className}`} {...props}>
    {children}
  </button>
);

FlatButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf([ButtonVariants]),
  className: PropTypes.string,
};

FlatButton.defaultProps = {
  children: 'Flat Button',
  variant: 'primary',
  className: '',
};

export default FlatButton;

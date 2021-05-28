import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ButtonOptions = ['primary', 'cancel', 'success', 'disabled'];

const FlatButton = ({ variant, children, className, ...props }) => (
  <button className={`${styles.button} ${styles[variant]} ${className}`} {...props}>
    {children}
  </button>
);

FlatButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(['', ...ButtonOptions]),
  className: PropTypes.string,
};

FlatButton.defaultProps = {
  children: 'Flat Button',
  variant: '',
  className: '',
};

export default FlatButton;

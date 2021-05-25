import PropTypes from 'prop-types';

import styles from './FlatButton.module.scss';

const ButtonOptions = ['primary', 'cancel', 'success'];

const FlatButton = ({ variant, children, ...props }) => (
  <button className={`${styles.button} ${styles[variant]}`} {...props}>
    {children}
  </button>
);

FlatButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(ButtonOptions),
};

FlatButton.defaultProps = {
  children: 'Flat Button',
  variant: 'primary',
};

export default FlatButton;

import PropTypes from 'prop-types';

import styles from './FlatButton.module.scss';

const ButtonOptions = ['primary', 'cancel', 'success'];

const FlatButton = ({ type, option, children, ...props }) => (
  <button type={type} className={`${styles.button} ${styles[option]}`} {...props}>
    {children}
  </button>
);

FlatButton.propTypes = {
  children: PropTypes.string,
  option: PropTypes.oneOf(ButtonOptions),
  type: PropTypes.string,
};

FlatButton.defaultProps = {
  children: 'Flat Button',
  option: 'primary',
  type: 'button',
};

export default FlatButton;

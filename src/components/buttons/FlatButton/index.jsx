import PropTypes from 'prop-types';

import styles from './FlatButton.module.scss';

const ButtonOptions = ['primary', 'cancel', 'success'];

const FlatButton = ({ option, children, ...props }) => (
  <button className={`${styles.button} ${styles[option]}`} {...props}>
    {children}
  </button>
);

FlatButton.propTypes = {
  children: PropTypes.string,
  option: PropTypes.oneOf(ButtonOptions),
};

FlatButton.defaultProps = {
  children: 'Flat Button',
  option: 'primary',
};

export default FlatButton;

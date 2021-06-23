import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import styles from './styles.module.scss';

const ButtonVariants = ['primary', 'cancel', 'success'];

const FlatButton = ({ variant, children, className, title, type, ...props }) => (
  <Button type={type} className={`${styles.button} ${styles[variant]} ${className}`} {...props}>
    {title || children}
  </Button>
);

FlatButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(ButtonVariants),
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

FlatButton.defaultProps = {
  children: '',
  title: '',
  variant: 'primary',
  className: '',
  type: 'submit',
};

export default FlatButton;

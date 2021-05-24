import PropTypes from 'prop-types';

import classes from './IconButton.module.scss';

const IconButton = ({ children, className, ...props }) => (
  <button className={`${classes.button} ${className}`} {...props}>
    {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
};

export default IconButton;

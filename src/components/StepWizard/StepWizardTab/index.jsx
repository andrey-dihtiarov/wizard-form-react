import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const StepWizardTab = ({ children, className, isActive, ...rest }) => (
  <Link className={`${styles.tab} ${isActive ? styles.tabActive : ''} ${className}`} {...rest}>
    {children}
  </Link>
);

StepWizardTab.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

StepWizardTab.defaultProps = {
  children: 'Tab',
  className: '',
};

export default StepWizardTab;

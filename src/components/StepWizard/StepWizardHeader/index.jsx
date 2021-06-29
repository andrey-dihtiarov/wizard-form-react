import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const StepWizardHeader = ({ steps }) => {
  const activeTab = steps.findIndex((step) => step.isActive);
  const [value, setValue] = useState(activeTab || 0);

  const onChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (activeTab >= 0 && value !== activeTab) {
      setValue(activeTab);
    }
  }, [activeTab, value]);

  return (
    <Tabs value={value} onChange={onChange}>
      {steps.map(({ isActive, isDisabled, title, path, key }, index) => (
        <Tab
          component={Link}
          className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
          label={title}
          value={index}
          disabled={isDisabled}
          to={path}
          key={key}
        />
      ))}
    </Tabs>
  );
};

StepWizardHeader.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      isDisabled: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StepWizardHeader;

import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import StepWizardTab from '../StepWizardTab';

import styles from './styles.module.scss';

const StepWizardHeader = ({ activeStep, steps, availableSteps }) => {
  const { path } = useRouteMatch();

  return (
    <div className={styles.headerWrapper}>
      {steps.map((step, index) => {
        const { slug, title } = step;
        return (
          <StepWizardTab
            isActive={activeStep === index}
            disabled={!availableSteps.includes(slug)}
            to={path.replace(':slug', slug)}
            key={slug}
          >
            {`${index + 1}. ${title}`}
          </StepWizardTab>
        );
      })}
    </div>
  );
};

StepWizardHeader.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  availableSteps: PropTypes.array.isRequired,
};

export default StepWizardHeader;

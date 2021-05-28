import { Link, useRouteMatch } from 'react-router-dom';
import FlatButton from '../../buttons/FlatButton';

import styles from './styles.module.scss';

const WizardHeader = ({ activeStep, steps }) => {
  const { path } = useRouteMatch();

  const setButtonType = (step, index) => {
    let variant = activeStep === index ? 'primary' : 'cancel';
    const isDisabled = activeStep < index;
    variant = isDisabled ? 'disabled' : variant;
    return { variant, isDisabled };
  };

  return (
    <div className={styles.headerWrapper}>
      {steps.map((step, index) => {
        const { variant, isDisabled } = setButtonType(step, index);
        return (
          <Link className={styles.link} key={step.slug} to={path.replace(':slug', step.slug)}>
            <FlatButton disabled={isDisabled} className={`${styles.button} ${styles[variant]}`}>
              {`${index + 1}. ${step.title}`}
            </FlatButton>
          </Link>
        );
      })}
    </div>
  );
};

export default WizardHeader;

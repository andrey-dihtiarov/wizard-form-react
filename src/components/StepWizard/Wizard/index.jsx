import PropTypes from 'prop-types';
import { Route, useRouteMatch, useParams, Redirect, useHistory } from 'react-router-dom';

import Step from '../Step';
import WizardHeader from '../WizardHeader';

import styles from './styles.module.scss';

const Wizard = ({ steps, onForward, onBack, onFinish }) => {
  const { path } = useRouteMatch();
  const { slug } = useParams();
  const defaultSlug = steps[0].slug;
  const isSlugExists = steps.some((step) => step.slug === slug);
  const activeStep = steps.findIndex((step) => step.slug === slug);

  const renderRoute = () => {
    const slugs = steps.map((item) => item.slug);

    if (!steps || !steps.length) return null;

    const mappedSteps = steps.map((item, index) => {
      const Component = item.component;
      const props = {
        isFirst: index === 0,
        isLast: index === steps.length - 1,
        key: item.slug,
        onForward,
        onBack,
        onFinish,
        slugs,
      };

      return (
        <Step {...props}>
          <Component />
        </Step>
      );
    });

    return isSlugExists ? (
      <>
        <WizardHeader steps={steps} activeStep={activeStep} />
        <div className={styles.wizardWrapper}>{mappedSteps[activeStep]}</div>
      </>
    ) : (
      <Redirect to={path.replace(':slug', defaultSlug)} />
    );
  };

  return <Route render={renderRoute} />;
};

Wizard.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.any,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  onForward: PropTypes.func,
  onBack: PropTypes.func,
  onFinish: PropTypes.func,
};

Wizard.defaultProps = {
  onForward: () => {},
  onBack: () => {},
  onFinish: () => {},
};

export default Wizard;

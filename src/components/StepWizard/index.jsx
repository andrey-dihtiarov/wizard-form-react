import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';

import StepWizardHeader from './StepWizardHeader';

import styles from './styles.module.scss';

const StepWizard = ({ steps, onForward, onBack, onFinish }) => {
  const defaultSlug = steps[0].slug;

  const [availableSteps, setAvailableSteps] = useState([defaultSlug]);

  const { path } = useRouteMatch();
  const { slug } = useParams();
  const history = useHistory();

  const isSlugExists = steps.some((step) => step.slug === slug);
  const activeStep = steps.findIndex((step) => step.slug === slug);

  const slugs = steps.map((item) => item.slug);

  const currentSlugIndex = useMemo(() => slugs.findIndex((item) => item === slug), [slug, slugs]);

  const onBackClick = useCallback(() => {
    onBack();
    history.push(path.replace(':slug', slugs[currentSlugIndex - 1]));
  }, [currentSlugIndex, history, onBack, path, slugs]);

  const onFinishClick = useCallback(
    (values) => {
      onFinish(values);
    },
    [onFinish],
  );

  const onForwardClick = useCallback(
    (values) => {
      onForward(values, slug);
      setAvailableSteps([...availableSteps, steps[currentSlugIndex + 1].slug]);
      history.push(path.replace(':slug', slugs[currentSlugIndex + 1]));
    },
    [onForward, slug, availableSteps, steps, currentSlugIndex, history, path, slugs],
  );

  useEffect(() => {
    if (!availableSteps.includes(slug) || !isSlugExists) {
      history.replace(path.replace(':slug', defaultSlug));
    }
  }, [availableSteps, defaultSlug, history, isSlugExists, path, slug]);

  const mappedSteps = useMemo(() => {
    if (!steps || !steps.length) return null;

    return steps.map((item, index) => {
      const Component = item.component;
      const props = {
        isFirst: index === 0,
        isLast: index === steps.length - 1,
        key: item.slug,
        onBack: onBackClick,
        onNext: index === steps.length - 1 ? onFinishClick : onForwardClick,
      };

      return <Component {...props} />;
    });
  }, [onBackClick, onFinishClick, onForwardClick, steps]);

  return (
    <>
      <StepWizardHeader steps={steps} activeStep={activeStep} availableSteps={availableSteps} />
      <div className={styles.wizardWrapper}>{mappedSteps[activeStep]}</div>
    </>
  );
};

StepWizard.propTypes = {
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

StepWizard.defaultProps = {
  onForward: () => {},
  onBack: () => {},
  onFinish: () => {},
};

export default StepWizard;

import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';

import StepWizardHeader from './StepWizardHeader';
import withRouteSlug from '../../hocs/withRouteSlug';

import styles from './styles.module.scss';

const StepWizard = ({ steps, onForward, onBack, onFinish, isEditing, data }) => {
  const [firstStep] = steps;
  const { slug: defaultSlug } = firstStep;

  const [availableSteps, setAvailableSteps] = useState([defaultSlug]);

  const { path } = useRouteMatch();
  const { slug, id } = useParams();
  const history = useHistory();

  const isSlugExists = steps.some((step) => step.slug === slug);
  const activeStep = steps.findIndex((step) => step.slug === slug);

  const stepWizardTabs = steps.map((item, index) => ({
    title: `${index + 1}. ${item.title}`,
    isActive: activeStep === index,
    isDisabled: !isEditing && !availableSteps.includes(item.slug),
    path: isEditing
      ? path.replace(':slug', item.slug).replace(':id', id)
      : path.replace(':slug', item.slug),
    key: item.slug,
  }));

  const onBackClick = useCallback(() => {
    onBack();
    const nextSlug = steps[activeStep - 1].slug;
    history.push(path.replace(':slug', nextSlug));
  }, [activeStep, history, onBack, path, steps]);

  const onFinishClick = useCallback(
    (values) => {
      onFinish(values);
    },
    [onFinish],
  );

  const onForwardClick = useCallback(
    (values) => {
      onForward(values, slug);
      const nextSlug = steps[activeStep + 1].slug;
      setAvailableSteps([...availableSteps, nextSlug]);
      history.push(path.replace(':slug', nextSlug));
    },
    [onForward, slug, availableSteps, steps, activeStep, history, path],
  );

  useEffect(() => {
    if ((!isEditing && !availableSteps.includes(slug)) || !isSlugExists) {
      history.replace(path.replace(':slug', defaultSlug));
    }
  }, [availableSteps, defaultSlug, history, isEditing, isSlugExists, path, slug]);

  return (
    <>
      <StepWizardHeader steps={stepWizardTabs} />
      <div className={styles.wizardWrapper}>
        {steps &&
          steps.length &&
          steps.map((item, index) => {
            const Component = item.component;
            const props = {
              isFirst: index === 0,
              isLast: index === steps.length - 1,
              key: item.slug,
              onBack: onBackClick,
              onNext: index === steps.length - 1 || isEditing ? onFinishClick : onForwardClick,
              isEditing,
              data,
            };

            return <Component {...props} />;
          })[activeStep]}
      </div>
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
  isEditing: PropTypes.bool,
  data: PropTypes.any,
};

StepWizard.defaultProps = {
  onForward: () => {},
  onBack: () => {},
  onFinish: () => {},
  isEditing: false,
  data: null,
};

export default withRouteSlug(StepWizard);

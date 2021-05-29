import React from 'react';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import FlatButton from '../../buttons/FlatButton';

import styles from './styles.module.scss';

const Step = ({ children, isFirst, isLast, slugs, onBack, onForward, onFinish }) => {
  const { path } = useRouteMatch();
  const { slug } = useParams();
  const history = useHistory();

  const indexOfSlug = () => slugs.findIndex((item) => item === slug);

  const onBackClick = () => {
    onBack();
    history.push(path.replace(':slug', slugs[indexOfSlug(slug) - 1]));
  };

  const onFinishClick = (values) => {
    onFinish(values);
  };

  const onForwardClick = (values) => {
    onForward(values, slug);
    history.push(path.replace(':slug', slugs[indexOfSlug(slug) + 1]));
  };

  const backButton = (
    <FlatButton type="button" variant="cancel" onClick={onBackClick}>
      Back
    </FlatButton>
  );

  const nextButton = isLast ? (
    <FlatButton type="button" variant="success" onClick={onFinishClick}>
      Finish
    </FlatButton>
  ) : (
    <FlatButton type="submit" variant="primary">
      Forward
    </FlatButton>
  );

  const navigation = (
    <div className={styles.buttonsWrapper}>
      <div>{!isFirst && backButton}</div>
      <div className={styles.buttonNext}>{nextButton}</div>
    </div>
  );

  const mappedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      children: navigation,
      onSubmit: isLast ? onFinishClick : onForwardClick,
    }),
  );

  return <div className={styles.stepWrapper}>{mappedChildren}</div>;
};

Step.propTypes = {
  children: PropTypes.element.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  slugs: PropTypes.array.isRequired,
  onForward: PropTypes.func,
  onBack: PropTypes.func,
  onFinish: PropTypes.func,
};

Step.defaultProps = {
  onForward: () => {},
  onBack: () => {},
  onFinish: () => {},
};

export default Step;

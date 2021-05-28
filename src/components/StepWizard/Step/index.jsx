import React from 'react';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import FlatButton from '../../buttons/FlatButton';

import styles from './styles.module.scss';
import { updateUser } from '../../../store/user';

const Step = ({ children, isFirst, isLast, slugs }) => {
  const { path } = useRouteMatch();
  const { slug } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const indexOfSlug = () => slugs.findIndex((item) => item === slug);
  const onBackClick = () => history.push(path.replace(':slug', slugs[indexOfSlug(slug) - 1]));
  const onFinishClick = () => {};
  const onSubmit = (values) => {
    dispatch(updateUser(values));
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
    React.cloneElement(child, { children: navigation, onSubmit }),
  );

  return <div className={styles.stepWrapper}>{mappedChildren}</div>;
};

Step.propTypes = {
  children: PropTypes.element.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  slugs: PropTypes.array.isRequired,
};

export default Step;

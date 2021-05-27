import PropTypes from 'prop-types';

import Nav from '../Nav';
import FlatButton from '../../buttons/FlatButton';

import styles from './styles.module.scss';

const Step = ({ show, children, isFirst, isLast, slugs }) => {
  const indexOfSlug = (slug) => slugs.findIndex((item) => item === slug);
  const onBackClick = (slug) => slugs[indexOfSlug(slug) - 1];
  const onNextClick = (slug) => slugs[indexOfSlug(slug) + 1];
  const onFinishClick = () => {};

  const backButton = (
    <Nav computedSlug={onBackClick}>
      <FlatButton variant="cancel">Back</FlatButton>
    </Nav>
  );
  const nextButton = isLast ? (
    <FlatButton variant="success" onClick={onFinishClick}>
      Finish
    </FlatButton>
  ) : (
    <Nav computedSlug={onNextClick}>
      <FlatButton variant="primary">Forward</FlatButton>
    </Nav>
  );

  return show ? (
    <div className={styles.stepWrapper}>
      {children}
      <div className={styles.buttonsWrapper}>
        <div>{!isFirst && backButton}</div>
        <div className={styles.buttonNext}>{nextButton}</div>
      </div>
    </div>
  ) : null;
};

Step.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  slugs: PropTypes.array.isRequired,
};

export default Step;

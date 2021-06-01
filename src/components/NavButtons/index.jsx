import PropTypes from 'prop-types';
import FlatButton from '../buttons/FlatButton';

const NavButtons = ({ isFirst, isLast, onBack }) => {
  const backButton = !isFirst && (
    <FlatButton type="button" variant="cancel" onClick={onBack}>
      Back
    </FlatButton>
  );

  const nextButton = isLast ? (
    <FlatButton type="submit" variant="success">
      Finish
    </FlatButton>
  ) : (
    <FlatButton type="submit" variant="primary">
      Forward
    </FlatButton>
  );

  return (
    <>
      {backButton}
      {nextButton}
    </>
  );
};

NavButtons.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default NavButtons;

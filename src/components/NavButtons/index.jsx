import PropTypes from 'prop-types';
import FlatButton from '../buttons/FlatButton';

const NavButtons = ({ isFirst, isLast, onBack }) => (
  <>
    {!isFirst && (
      <FlatButton type="button" variant="cancel" onClick={onBack}>
        Back
      </FlatButton>
    )}
    {isLast ? (
      <FlatButton type="submit" variant="success">
        Finish
      </FlatButton>
    ) : (
      <FlatButton type="submit" variant="primary">
        Forward
      </FlatButton>
    )}
  </>
);

NavButtons.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default NavButtons;

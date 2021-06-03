import PropTypes from 'prop-types';
import FlatButton from '../../buttons/FlatButton';

import styles from './styles.module.scss';

const NavButtons = ({ isFirst, isLast, onBack }) => (
  <div className={styles.wrapper}>
    {!isFirst && (
      <FlatButton type="button" variant="cancel" onClick={onBack}>
        Back
      </FlatButton>
    )}
    {isLast ? (
      <FlatButton type="submit" variant="success" className={styles.next}>
        Finish
      </FlatButton>
    ) : (
      <FlatButton type="submit" variant="primary" className={styles.next}>
        Forward
      </FlatButton>
    )}
  </div>
);

NavButtons.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default NavButtons;

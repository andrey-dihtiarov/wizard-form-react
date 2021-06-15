import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Loader = ({ withOverlay, isFixed }) => (
  <div>
    {withOverlay && <div className={styles.overlay} />}
    <div className={`${styles.ldsEllipsis} ${isFixed ? styles.ldsEllipsisFixed : ''}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

Loader.propTypes = {
  withOverlay: PropTypes.bool,
  isFixed: PropTypes.bool,
};

Loader.defaultProps = {
  withOverlay: false,
  isFixed: true,
};

export default Loader;

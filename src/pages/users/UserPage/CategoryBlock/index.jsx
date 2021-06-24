import PropTypes from 'prop-types';
import { Edit } from '@material-ui/icons';

import styles from './styles.module.scss';

const CategoryBlock = ({ title, onTitleClick, children }) => (
  <div className={styles.block}>
    <div className={styles.title} role="presentation" onClick={onTitleClick}>
      <div>{title}</div>
      <Edit className={styles.icon} />
    </div>
    <div className={styles.info}>{children}</div>
  </div>
);

CategoryBlock.propTypes = {
  title: PropTypes.string,
  onTitleClick: PropTypes.func,
  children: PropTypes.node,
};

CategoryBlock.defaultProps = {
  title: '',
  onTitleClick: () => {},
  children: null,
};

export default CategoryBlock;

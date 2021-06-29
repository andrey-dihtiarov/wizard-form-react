import PropTypes from 'prop-types';
import { Edit } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';

import styles from './styles.module.scss';

const CategoryBlock = ({ title, onTitleClick, children, tooltipTitle }) => (
  <div className={styles.block}>
    <Tooltip title={tooltipTitle}>
      <div className={styles.title} role="presentation" onClick={onTitleClick}>
        <div>{title}</div>
        <Edit className={styles.icon} />
      </div>
    </Tooltip>
    <div className={styles.info}>{children}</div>
  </div>
);

CategoryBlock.propTypes = {
  title: PropTypes.string,
  onTitleClick: PropTypes.func,
  children: PropTypes.node,
  tooltipTitle: PropTypes.string,
};

CategoryBlock.defaultProps = {
  title: '',
  onTitleClick: () => {},
  children: null,
  tooltipTitle: '',
};

export default CategoryBlock;

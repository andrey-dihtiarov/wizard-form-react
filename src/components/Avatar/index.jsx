import PropTypes from 'prop-types';

import { ReactComponent as UserPlaceholder } from '../../assets/icons/user-solid.svg';

import styles from './Avatar.module.scss';

const Avatar = ({ image }) => (
  <div className={styles.avatarWrapper}>
    {image ? (
      <img className={styles.avatar} src={image} alt="avatar" />
    ) : (
      <div className={`${styles.avatar} ${styles.avatarPlaceholder}`}>
        <UserPlaceholder />
      </div>
    )}
  </div>
);

Avatar.propTypes = {
  image: PropTypes.string,
};

Avatar.defaultProps = {
  image: null,
};

export default Avatar;

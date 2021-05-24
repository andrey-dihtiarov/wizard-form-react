import React from 'react';

import { ReactComponent as UserPlaceholder } from '../../assets/icons/user-solid.svg';

import styles from './Avatar.module.scss';

const Avatar = ({ image }) => (
  <div className={styles.container}>
    {image ? (
      <img className={styles.avatar} src={image} alt="avatar" />
    ) : (
      <div className={`${styles.avatar} ${styles.avatarPlaceholder}`}>
        <UserPlaceholder />
      </div>
    )}
  </div>
);

export default Avatar;

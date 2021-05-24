import React from 'react';

import { ReactComponent as UserPlaceholder } from '../../assets/icons/user-solid.svg';

import classes from './Avatar.module.scss';

const Avatar = ({ image }) => (
  <div className={classes.container}>
    {image ? (
      <img className={classes.avatar} src={image} alt="avatar" />
    ) : (
      <div className={`${classes.avatar} ${classes.avatarPlaceholder}`}>
        <UserPlaceholder />
      </div>
    )}
  </div>
);

export default Avatar;

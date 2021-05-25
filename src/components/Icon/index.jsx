import PropTypes from 'prop-types';

import { ICONS } from '../../constants';

import { ReactComponent as EyeSolid } from '../../assets/icons/eye-solid.svg';
import { ReactComponent as EyeSlashSolid } from '../../assets/icons/eye-slash-solid.svg';
import { ReactComponent as UserSolid } from '../../assets/icons/user-solid.svg';
import { ReactComponent as AddSolid } from '../../assets/icons/plus-solid.svg';
import { ReactComponent as UserFriendsSolid } from '../../assets/icons/user-friends-solid.svg';

const NAME_TO_ICON = {
  [ICONS.eye]: EyeSolid,
  [ICONS.eyeSlash]: EyeSlashSolid,
  [ICONS.user]: UserSolid,
  [ICONS.add]: AddSolid,
  [ICONS.userFriends]: UserFriendsSolid,
};

const Icon = (props) => {
  const { width, height, icon, ...rest } = props;
  const Component = NAME_TO_ICON[icon];
  return <Component width={width} height={height} {...rest} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  width: 16,
  height: 16,
};

export default Icon;
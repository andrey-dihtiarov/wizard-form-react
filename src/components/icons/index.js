import { ReactComponent as EyeSolid } from '../../assets/icons/eye-solid.svg';
import { ReactComponent as EyeSlashSolid } from '../../assets/icons/eye-slash-solid.svg';
import { ReactComponent as UserSolid } from '../../assets/icons/user-solid.svg';
import { ReactComponent as AddSolid } from '../../assets/icons/plus-solid.svg';
import { ReactComponent as UserFriendsSolid } from '../../assets/icons/user-friends-solid.svg';

export const Icon = ({ icon: Component, width = 16, height = 16, fill = '#C2CFDF', ...props }) => (
  <Component width={width} height={height} fill={fill} {...props} />
);

export const EyeOpenIcon = (props) => <Icon icon={EyeSolid} {...props} />;
export const EyeCrossedIcon = (props) => <Icon icon={EyeSlashSolid} {...props} />;
export const UserIcon = (props) => <Icon icon={UserSolid} {...props} />;
export const AddIcon = (props) => <Icon icon={AddSolid} {...props} />;
export const UsersIcon = (props) => <Icon icon={UserFriendsSolid} {...props} />;

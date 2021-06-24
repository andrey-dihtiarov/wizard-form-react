import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { IconButton, Button } from '@material-ui/core';
import { Edit, Clear } from '@material-ui/icons';

import Avatar from '../../../../components/Avatar';

import styles from './styles.module.scss';

const UserRow = ({ user, index, selectedRow, onRowChange, onUserEdit, onUserDelete }) => {
  const isSelected = index === selectedRow;
  const { id, avatar, firstName, lastName, userName, company, phoneNumbers, email, lastUpdate } =
    user;
  const [firstPhone] = phoneNumbers || [];
  return (
    <tr className={`${styles.row} ${isSelected ? styles.rowSelected : ''}`}>
      <td>
        <Avatar className={styles.avatar} image={avatar} />
      </td>
      <td>
        {`${firstName} ${lastName}`}
        <div className={styles.username}>{userName}</div>
      </td>
      <td>{company}</td>
      <td>{firstPhone || email}</td>
      <td>{formatDistanceToNow(Date.parse(lastUpdate))} ago</td>
      <td>
        <IconButton disabled={isSelected} onClick={onUserEdit(id)} className={styles.edit}>
          <Edit />
        </IconButton>
      </td>
      <td>
        <IconButton disabled={isSelected} onClick={onRowChange(index)} className={styles.delete}>
          <Clear />
        </IconButton>
      </td>
      {isSelected && (
        <td>
          <Button
            size="small"
            startIcon={<Clear />}
            className={styles.deleteConfirm}
            onClick={onUserDelete(id)}
          >
            delete
          </Button>
        </td>
      )}
    </tr>
  );
};

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    phoneNumbers: PropTypes.array,
    email: PropTypes.string.isRequired,
    lastUpdate: PropTypes.oneOfType([PropTypes.instanceOf(Date).isRequired, PropTypes.string]),
  }),
  onUserDelete: PropTypes.func,
  onUserEdit: PropTypes.func,
  onRowChange: PropTypes.func,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectedRow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserRow.defaultProps = {
  user: {
    avatar: null,
    phoneNumbers: [],
  },
  onUserDelete: () => {},
  onUserEdit: () => {},
  onRowChange: () => {},
  selectedRow: null,
};

export default UserRow;

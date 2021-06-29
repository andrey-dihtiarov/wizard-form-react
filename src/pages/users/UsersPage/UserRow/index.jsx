import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { IconButton, Button, TableRow, TableCell, Tooltip } from '@material-ui/core';
import { Edit, Clear } from '@material-ui/icons';

import Avatar from '../../../../components/Avatar';

import styles from './styles.module.scss';

const UserRow = ({ user, index, selectedRow, onRowChange, onUserEdit, onUserDelete }) => {
  const isSelected = index === selectedRow;
  const { id, avatar, firstName, lastName, userName, company, phoneNumbers, email, lastUpdate } =
    user;
  const [firstPhone] = phoneNumbers || [];
  return (
    <TableRow className={`${styles.row} ${isSelected ? styles.rowSelected : ''}`}>
      <TableCell>
        <Avatar className={styles.avatar} image={avatar} />
      </TableCell>
      <TableCell>
        {`${firstName} ${lastName}`}
        <div className={styles.username}>{userName}</div>
      </TableCell>
      <TableCell>{company}</TableCell>
      <TableCell>{firstPhone || email}</TableCell>
      <TableCell>{formatDistanceToNow(Date.parse(lastUpdate))} ago</TableCell>
      <TableCell>
        <Tooltip title={`Edit ${userName}'s Profile`}>
          <IconButton disabled={isSelected} onClick={onUserEdit(id)} className={styles.edit}>
            <Edit />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell>
        <Tooltip title={`Delete ${userName}'s Profile`}>
          <IconButton disabled={isSelected} onClick={onRowChange(index)} className={styles.delete}>
            <Clear />
          </IconButton>
        </Tooltip>
      </TableCell>
      {isSelected && (
        <TableCell>
          <Button
            size="small"
            startIcon={<Clear />}
            className={styles.deleteConfirm}
            onClick={onUserDelete(id)}
          >
            delete
          </Button>
        </TableCell>
      )}
    </TableRow>
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

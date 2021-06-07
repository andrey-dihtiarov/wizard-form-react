import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import UserRow from '../UserRow';

import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';

import styles from './styles.module.scss';

const UsersTable = ({ users, onUserEdit, onUserDelete }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);

  const onRowChange = (index) => () => setSelectedRow(index);

  const onClickOutside = () => setSelectedRow(null);

  useOnClickOutside(tableRef, onClickOutside);

  const onUserRemove = (id) => () => {
    setSelectedRow(null);
    onUserDelete();
    // TODO remove mocks
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) => user.id !== id);
  };

  return (
    <table ref={tableRef} className={styles.table}>
      <thead className={styles.header}>
        <tr className={styles.row}>
          <th className={`${styles.cell} ${styles.cellAvatar}`} />
          <th className={styles.cell}>name</th>
          <th className={styles.cell}>company</th>
          <th className={`${styles.cell} ${styles.cellContacts}`}>contacts</th>
          <th className={styles.cell}>last update</th>
          <th className={`${styles.cell} ${styles.cellButtons}`} />
          <th className={`${styles.cell} ${styles.cellButtons}`} />
        </tr>
      </thead>
      <tbody className={styles.body}>
        {users &&
          users.length &&
          users.map((user, index) => (
            <UserRow
              key={user.id || user.email}
              user={user}
              index={index}
              onUserDelete={onUserRemove}
              onRowChange={onRowChange}
              selectedRow={selectedRow}
              onUserEdit={onUserEdit}
            />
          ))}
      </tbody>
    </table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      phoneNumbers: PropTypes.array,
      email: PropTypes.string.isRequired,
      birthDate: PropTypes.instanceOf(Date).isRequired,
      address: PropTypes.string.isRequired,
      fax: PropTypes.string.isRequired,
      facebookLink: PropTypes.string.isRequired,
      skills: PropTypes.array.isRequired,
      myHobbies: PropTypes.array,
      githubLink: PropTypes.string.isRequired,
    }),
  ),
  onUserEdit: PropTypes.func,
  onUserDelete: PropTypes.func,
};

UsersTable.defaultProps = {
  users: {
    avatar: null,
    phoneNumbers: [],
    myHobbies: [],
  },
  onUserEdit: () => {},
  onUserDelete: () => {},
};

export default UsersTable;

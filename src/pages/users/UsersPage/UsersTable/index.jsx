import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  // TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import UserRow from '../UserRow';

import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import Loader from '../../../../components/Loader';

import styles from './styles.module.scss';

const HEADERS = ['', 'name', 'company', 'contacts', 'last update', '', ''];

const UsersTable = ({ users, onUserEdit, onUserDelete }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);
  const { isLoading } = useSelector((state) => state.user);

  const onRowChange = (index) => () => setSelectedRow(index);

  const onClickOutside = () => setSelectedRow(null);

  useOnClickOutside(tableRef, onClickOutside);

  const onUserRemove = (id) => () => {
    setSelectedRow(null);
    onUserDelete(id);
  };

  // TODO rowspan
  return (
    <Table ref={tableRef} className={styles.table}>
      <TableHead className={styles.header}>
        <TableRow>
          {HEADERS.map((title) => (
            <TableCell>{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody className={styles.body}>
        {isLoading ? (
          <TableRow className={styles.wrapper}>
            <TableCell>
              <Loader />
            </TableCell>
          </TableRow>
        ) : (
          users.map((user, index) => (
            <UserRow
              key={user.id}
              user={user}
              index={index}
              onUserDelete={onUserRemove}
              onRowChange={onRowChange}
              selectedRow={selectedRow}
              onUserEdit={onUserEdit}
            />
          ))
        )}
        {!users.length && !isLoading && (
          <TableRow className={styles.wrapper}>
            <TableCell className={styles.empty}>No Users Found</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
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
      birthDate: PropTypes.oneOfType([PropTypes.instanceOf(Date).isRequired, PropTypes.string])
        .isRequired,
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

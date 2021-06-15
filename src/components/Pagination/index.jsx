import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../buttons/FlatButton';

import styles from './styles.module.scss';

const Pagination = ({ onNavigation, total, skip, limit }) => {
  const [limitState] = useState(limit);
  const [skipState, setSkipState] = useState(skip);

  const nextPage = () => {
    setSkipState((data) => data + limitState);
  };

  const previousPage = () => {
    setSkipState((data) => data - limitState);
  };

  useEffect(() => {
    onNavigation(skipState, limitState);
  }, [skipState, limitState, onNavigation, total]);

  useEffect(() => {
    if (!(total % limitState) && total < skipState + limitState) {
      setSkipState(skipState - limitState);
    }
  }, [limitState, skipState, total]);

  return (
    <div className={styles.wrapper}>
      <FlatButton onClick={previousPage} disabled={!skipState}>
        Previous Page
      </FlatButton>
      <FlatButton onClick={nextPage} disabled={skipState + limitState >= total}>
        Next Page
      </FlatButton>
    </div>
  );
};

Pagination.propTypes = {
  onNavigation: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  skip: PropTypes.number,
  limit: PropTypes.number,
};

Pagination.defaultProps = {
  skip: 0,
  limit: 5,
};

export default Pagination;

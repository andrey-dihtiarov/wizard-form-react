import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useDebounce from '../../hooks/useDebounce';

import styles from './styles.module.scss';

const Search = ({ onSearch, className, ...rest }) => {
  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setQuery(value);
  };

  return (
    <div className={className}>
      <input className={styles.search} onChange={onChange} value={query} {...rest} />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
  className: PropTypes.func,
};

Search.defaultProps = {
  onSearch: () => {},
  className: '',
};

export default Search;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import useDebounce from '../../hooks/useDebounce';

import styles from './styles.module.scss';

const Search = ({ className, searchQuery, ...rest }) => {
  const [query, setQuery] = useState(searchQuery);
  const history = useHistory();

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) {
      params.append('search', debouncedQuery);
    } else {
      params.delete('search');
    }
    history.push({ search: params.toString() });
  }, [debouncedQuery, history]);

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
  className: PropTypes.string,
};

Search.defaultProps = {
  className: '',
};

export default Search;

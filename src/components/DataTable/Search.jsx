import PropTypes from 'prop-types';
import React from 'react';

const Search = props => {
  const { placeholder, onSearch } = props;

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder={placeholder || 'Search...'}
        onChange={onSearch}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Search;

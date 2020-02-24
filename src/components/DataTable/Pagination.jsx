import PropTypes from 'prop-types';
import React from 'react';

import Page from './Page';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  if (totalNumberOfPages <= 1) {
    return null;
  }

  return (
    <ul className="pagination">
      {Array.from(Array(totalNumberOfPages).keys()).map(pageNumber => (
        <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  totalNumberOfPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;

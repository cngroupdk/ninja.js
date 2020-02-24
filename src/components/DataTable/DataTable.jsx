import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Pagination from './Pagination';
import Search from './Search';

const DataTable = props => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [searchText, setSearchText] = useState('');

  const { headers, rows, rowsPerPage, rowRenderer, searchPlaceholder, tableClassName } = props;

  const filteredRows = useMemo(() => {
    let result = rows;

    if (searchText) {
      const regex = new RegExp(searchText, 'ig');

      result = rows.filter(row => regex.test(row.name1) || regex.test(row.email));
    }

    const startIndex = currentPageNumber * rowsPerPage;

    return result.slice(startIndex, startIndex + rowsPerPage);
  }, [rows, rowsPerPage, currentPageNumber, searchText]);

  const totalNumberOfPages = rowsPerPage === 0 ? 0 : Math.ceil(rows.length / rowsPerPage);

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  function handlePageNumberChange(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  return (
    <>
      <Search placeholder={searchPlaceholder} onSearch={handleSearch} />
      <table className={tableClassName}>
        {headers && (
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{filteredRows.map(rowRenderer)}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={handlePageNumberChange}
      />
    </>
  );
};

DataTable.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number,
  rowRenderer: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string,
  tableClassName: PropTypes.string,
};

DataTable.defaultProps = {
  rowsPerPage: 40,
};

export default DataTable;

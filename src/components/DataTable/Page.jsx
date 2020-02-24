import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Page = props => {
  const { pageNumber, currentPageNumber, onChange } = props;

  const isActivePage = currentPageNumber === pageNumber;
  const renderedPageNumber = pageNumber + 1;

  function handleClick() {
    onChange(pageNumber);
  }

  return (
    <li className="page-item mr-1">
      <button className={cn('page-link', { 'button-outline': isActivePage })} onClick={handleClick}>
        {renderedPageNumber}
      </button>
    </li>
  );
};

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Page;

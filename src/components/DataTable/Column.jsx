import PropTypes from 'prop-types';
import React from 'react';

const Column = ({ children, ...props }) => <td {...props}>{children}</td>;

Column.propTypes = {
  children: PropTypes.node,
};

export default Column;

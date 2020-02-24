import PropTypes from 'prop-types';
import React from 'react';

const Row = ({ children, ...props }) => <tr {...props}>{children}</tr>;

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;

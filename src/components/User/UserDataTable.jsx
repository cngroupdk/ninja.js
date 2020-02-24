import PropTypes from 'prop-types';
import React from 'react';

import DataTable from '../DataTable/DataTable';

import userRowRenderer from './userRowRenderer';

const UserDataTable = props => (
  <DataTable
    headers={['Name', 'Email']}
    rows={props.rows}
    rowsPerPage={5}
    rowRenderer={userRowRenderer}
    searchPlaceholder="Search users..."
  />
);

UserDataTable.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default UserDataTable;

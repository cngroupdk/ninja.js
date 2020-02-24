import React from 'react';

import Column from '../DataTable/Column';
import Row from '../DataTable/Row';

const userRowRenderer = row => (
  <Row key={row.per_id}>
    <Column>
      <a href={row.edit_path}>{row.name1}</a>
    </Column>
    <Column>{row.email}</Column>
  </Row>
);

export default userRowRenderer;

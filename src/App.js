import React from 'react';

import UserDataTable from './components/User/UserDataTable';

import './App.css';

const App = props => (
  <div className="container mt-3">
    <UserDataTable rows={props.rows} />
  </div>
);

export default App;

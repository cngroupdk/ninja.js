import { mount, shallow } from 'enzyme';
import React from 'react';

import App from './App';

const rows = [
  {
    name1: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 1,
  },
  {
    name1: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 2,
  },
  {
    name1: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 3,
  },
  {
    name1: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    edit_path: 'http://google.com',
    per_id: 4,
  },
  {
    name1: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 5,
  },
  {
    name1: 'Some Body',
    email: 'some.body@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 6,
  },
];

it('renders without crashing', () => {
  shallow(<App rows={[]} rowsPerPage={5} />);
});

it('renders 5 rows', () => {
  const wrapper = mount(<App rows={rows} rowsPerPage={5} />);

  expect(wrapper.find('tbody tr').length).toBe(5);
});

it('filters rows based on input', () => {
  const wrapper = mount(<App rows={rows} rowsPerPage={5} />);

  wrapper.find('input').simulate('change', { target: { value: 'k' } });

  expect(wrapper.find('tbody tr').length).toBe(2);
});

it('renders pagination with 2 buttons', () => {
  const wrapper = mount(<App rows={rows} rowsPerPage={5} />);

  expect(wrapper.find('.pagination li').length).toBe(2);
});

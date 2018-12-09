import React from 'react';
import { uniqBy } from 'lodash';

/**
 * An array of columns passed to the table. Header - column header; Cell - column data, accessor -
 * property of object key to display
 * @returns {*[]}
 */
export const getTableColumns = () => ([
  {
    Header: () => (
      <span>
        Name
      </span>
    ),
    Cell: row => (
      <span>
        {row.value}
      </span>
    ),
    accessor: 'name',
  },
  {
    Header: () => (
      <span>
        Surname
      </span>
    ),
    Cell: row => (
      <span>
        {row.value}
      </span>
    ),
    accessor: 'surname',
  },
  {
    Header: () => (
      <span>
        City
      </span>
    ),
    Cell: row => (
      <span>
        {row.value}
      </span>
    ),
    accessor: 'city',
  },
  {
    Header: () => (
      <span>
        Email
      </span>
    ),
    Cell: row => (
      <span>
        {row.value}
      </span>
    ),
    accessor: 'email',
  },
  {
    Header: () => (
      <span>
        Phone
      </span>
    ),
    Cell: row => (
      <span>
        {row.value}
      </span>
    ),
    accessor: 'phone',
  },
  {
    Cell: () => (
      <span>
        Edit/Delete
      </span>
    ),
    accessor: 'id',
  }
]);

/**
 * Filters out unique contacts by city and maps them to city options array
 * @param contacts
 * @returns {{value: string, text: string}[]}
 */
export const getCityOptions = contacts => uniqBy(contacts, 'city').map(c => ({
  value: c.city,
  text: c.city,
}));

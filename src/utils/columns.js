import React from 'react';

export const contacts = [
  {
    Cell: () => (
      <span>
        Active/Inactive
      </span>
    ),
    accessor: 'id',
  },
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
];

import React from 'react';
import Input from '../../../components/input';
import Select from '../../../components/select';
import Button from '../../../components/button';

const Filter = ({ cityOptions, setFilterValue, filterContacts }) => (
  <div>
    <Input
      className="input input--text input--rounded"
      name="name"
      onChange={e => setFilterValue('name', e.target.value)}
      placeholder="Name"
      type="text"
    />
    <Select
      className="input input--select input--rounded"
      name="city"
      options={cityOptions}
      onChange={e => setFilterValue('city', e.target.value)}
      placeholder="City"
    />
    <Input
      className="input input--checkbox"
      label="Show active"
      name="active"
      onChange={e => setFilterValue('active', e.target.checked)}
      type="checkbox"
    />
    <Button
      className="btn btn--round"
      type="button"
      value="Filter"
      onClick={filterContacts}
    />
    <Button
      className="btn btn--round"
      type="button"
      value="ADD NEW"
    />
  </div>
);

export default Filter;

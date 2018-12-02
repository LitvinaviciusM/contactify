import React from 'react';
import Input from '../../../components/input';
import Select from '../../../components/select';
import Button from '../../../components/button';

const Filter = ({ cityOptions }) => (
  <div>
    <Input
      className="input input--text input--rounded"
      name="name"
      placeholder="Name"
      type="text"
    />
    <Select
      className="input input--select input--rounded"
      name="city"
      options={cityOptions}
      placeholder="City"
    />
    <Input
      className="input input--checkbox"
      label="Show active"
      name="active"
      type="checkbox"
    />
    <Button
      className="btn"
      type="button"
      value="Filter"
    />
    <Button
      className="btn"
      type="button"
      value="ADD NEW"
    />
  </div>
);

export default Filter;

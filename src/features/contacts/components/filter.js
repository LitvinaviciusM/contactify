import React from 'react';
import Input from '../../../components/input';
import Select from '../../../components/select';

const Filter = ({ cityOptions }) => (
  <div>
    <Input
      className="input input--rounded"
      name="name"
      placeholder="Name"
      type="text"
    />
    <Select name="city" options={cityOptions} />
  </div>
);

export default Filter;

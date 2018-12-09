import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../../components/input';
import Select from '../../../components/select';
import Button from '../../../components/button';

const Filter = ({
  cityOptions,
  handleSubmit,
  resetFilter,
}) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={Input}
      className="input input--text input--rounded"
      name="name"
      placeholder="Name"
      type="text"
    />
    <Field
      component={Select}
      className="input input--select input--rounded"
      name="city"
      options={cityOptions}
      placeholder="City"
    />
    <Field
      component={Input}
      className="input input--checkbox"
      label="Show active"
      name="active"
      type="checkbox"
    />
    <Button
      className="btn btn--round"
      type="submit"
      value="Filter"
    />
    <Button
      className="btn btn--round"
      type="button"
      value="Reset"
      onClick={resetFilter}
    />
  </form>
);

export default reduxForm({
  form: 'filter',
})(Filter);

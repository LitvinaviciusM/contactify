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
  <form
    onSubmit={handleSubmit}
    className="contacts__filter"
  >
    <Field
      component={Input}
      name="name"
      placeholder="Name"
      type="text"
      variant="filter-name"
    />
    <Field
      component={Select}
      name="city"
      options={cityOptions}
      placeholder="City"
      variant="filter-city"
      icon="caret-down"
    />
    <Field
      component={Input}
      label="Show active"
      name="active"
      type="checkbox"
      variant="filter-active"
    />
    <Button
      className="btn btn--transparent btn--round"
      type="submit"
      value="FILTER"
    />
    <Button
      className="btn btn--transparent btn--round"
      type="button"
      value="RESET"
      onClick={resetFilter}
    />
  </form>
);

export default reduxForm({
  form: 'filter',
})(Filter);

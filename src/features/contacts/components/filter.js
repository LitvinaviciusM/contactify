import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Input from '../../../components/input';
import Select from '../../../components/select';
import Button from '../../../components/button';

const Filter = ({
  cityOptions,
  handleSubmit,
  resetFilter,
  pristine,
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
      disabled={pristine}
    />
    <Button
      className="btn btn--transparent btn--round"
      type="button"
      value="RESET"
      onClick={resetFilter}
      disabled={pristine}
    />
    <Button
      className="btn btn--green btn--round"
      type="button"
      value="ADD NEW CONTRACT"
      onClick={resetFilter}
      icon="plus"
    />
  </form>
);

Filter.propTypes = {
  cityOptions: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func,
  resetFilter: PropTypes.func,
  pristine: PropTypes.bool,
};

export default reduxForm({
  form: 'filter',
})(Filter);

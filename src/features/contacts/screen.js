import React from 'react';
import PropTypes from 'prop-types';
import DataSheet from './components/datasheet';
import Filter from './components/filter';
import Table from '../../components/table';
import { getTableColumns } from './utils';

class Contacts extends React.Component {
  componentDidMount = () => {
    const { initContacts } = this.props;

    initContacts();
  };

  setTrProps = (state, rowInfo) => {
    const { selectContact, profile } = this.props;

    return {
      onClick: () => selectContact(rowInfo.original),
      style: {
        background: rowInfo.row.id === profile.id ? "#dcf9ff" : "white"
      },
    }
  };

  onFilterSubmit = values => {
    const { filterContacts } = this.props;

    filterContacts(values);
  };


  render() {
    const {
      contacts,
      profile,
      cityOptions,
      resetFilter,
      isFiltered,
      isFetching,
    } = this.props;

    return (
      <div className="contacts inner">
        <Filter
          cityOptions={cityOptions}
          onSubmit={this.onFilterSubmit}
          initialValues={{
            city: '',
            name: '',
            active: false,
          }}
          resetFilter={resetFilter}
          isFiltered={isFiltered}
        />
        <div className="contacts__main">
          <DataSheet {...profile ? profile : {}} />
          <Table
            columns={getTableColumns(profile && profile.id)}
            data={contacts}
            minRows={0}
            showPagination={false}
            getTrProps={this.setTrProps}
            loading={isFetching}
          />
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  cityOptions: PropTypes.arrayOf(PropTypes.object),
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterContacts: PropTypes.func,
  profile: PropTypes.object,
  resetFilter: PropTypes.func,
  selectContact: PropTypes.func,
  initContacts: PropTypes.func,
  isFiltered: PropTypes.bool,
  isFetching: PropTypes.bool,
};

export default Contacts;

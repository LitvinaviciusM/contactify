import React from 'react';
import Table from '../../components/table';
import DataSheet from './components/datasheet';
import Filter from './components/filter';
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
        />
        <div className="contacts__main">
          <DataSheet {...profile ? profile : {}} />
          <Table
            columns={getTableColumns(profile && profile.id)}
            data={contacts}
            minRows={0}
            showPagination={false}
            getTrProps={this.setTrProps}
          />
        </div>
      </div>
    );
  }
}

export default Contacts;

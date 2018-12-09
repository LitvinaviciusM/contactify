import React from 'react';
import Table from '../../components/table';
import ContactProfile from './components/contactprofile';
import Filter from './components/filter';
import { getTableColumns } from './utils';

class Contacts extends React.Component {
  componentDidMount = () => {
    const { initContacts } = this.props;

    initContacts();
  };

  setTrProps = (state, rowInfo) => {
    const { selectContact } = this.props;

    return {
      onClick: () => selectContact(rowInfo.original),
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
      <div className="contacts">
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
        <ContactProfile {...profile ? profile : {}} />
        <Table
          columns={getTableColumns()}
          data={contacts}
          minRows={0}
          showPagination={false}
          getTrProps={this.setTrProps}
        />
      </div>
    );
  }
}

export default Contacts;

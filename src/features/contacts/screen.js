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

  render() {
    const {
      contacts,
      profile,
      setFilterValue,
      filterContacts,
      cityOptions,
    } = this.props;

    return (
      <div>
        <Filter
          cityOptions={cityOptions}
          setFilterValue={setFilterValue}
          filterContacts={filterContacts}
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

import React from 'react';
import Table from '../../components/table';
import ContactProfile from './components/contactprofile';
import Filter from './components/filter';
import { getCitiesOptions, getTableColumns } from './utils';

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
    const { contacts, profile, setFilterValue } = this.props;

    return (
      <div>
        <Filter
          cityOptions={getCitiesOptions(contacts)}
          setFilterValue={setFilterValue}
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

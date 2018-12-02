import React from 'react';
import Table from '../../components/table';
import { contacts as columns } from '../../utils/columns';

import ContactProfile from './components/contactprofile';
import Filter from './components/filter';

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
    const { contacts, contactProfile } = this.props;

    return (
      <div>
        <Filter cityOptions={[]} />
        <ContactProfile {...contactProfile ? contactProfile : {}} />
        <Table
          columns={columns}
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

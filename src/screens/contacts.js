import React from 'react';
import Table from '../components/table';
import { contacts as columns } from '../utils/columns';

class Contacts extends React.Component {
  componentDidMount = () => {
    const { initContacts } = this.props;

    initContacts();
  };

  render() {
    const { contacts } = this.props;

    return (
      <Table
        columns={columns}
        data={contacts}
      />
    );
  }
}

export default Contacts;

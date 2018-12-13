import React from 'react';
import PropTypes from 'prop-types';
import DataRow from './datarow';
import ContactPhoto from './contactphoto';
import { FALLBACK_PROFILE_PIC } from '../../../common/constants';

const DataSheet = ({
  imgUrl,
  city,
  email,
  name,
  phone,
  surname,
}) => (
  <section className="sheet inner--small">
    <ContactPhoto
      src={imgUrl || FALLBACK_PROFILE_PIC}
      alt={name}
    />
    <DataRow
      value={name}
      label="Name"
    />
    <DataRow
      value={surname}
      label="Surname"
    />
    <DataRow
      value={city}
      label="City"
    />
    <DataRow
      value={email}
      label="Email"
      link
    />
    <DataRow
      value={phone}
      label="Phone"
    />
  </section>
);

DataSheet.propTypes = {
  imgUrl: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  surname: PropTypes.string,
};

export default DataSheet;

import React from 'react';
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

export default DataSheet;

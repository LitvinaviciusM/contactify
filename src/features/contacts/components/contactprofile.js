import React from 'react';

const ContactProfile = ({
  city,
  email,
  name,
  phone,
  surname,
}) => (
  <section>
    <span>
      {name}
    </span>
    <span>
      {surname}
    </span>
    <span>
      {city}
    </span>
    <span>
      {email}
    </span>
    <span>
      {phone}
    </span>
  </section>
);

export default ContactProfile;

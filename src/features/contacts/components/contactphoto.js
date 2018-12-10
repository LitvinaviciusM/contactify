import React from 'react'

const ContactPhoto = ({ alt, src }) => (
  <div className="sheet__image-wrapper">
    <img alt={alt} src={src} />
  </div>
);

export default ContactPhoto;


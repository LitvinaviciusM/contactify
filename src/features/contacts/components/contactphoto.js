import React from 'react'
import PropTypes from 'prop-types';

const ContactPhoto = ({ alt, src }) => (
  <div className="sheet__image-wrapper">
    <img alt={alt} src={src} />
  </div>
);

ContactPhoto.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

export default ContactPhoto;


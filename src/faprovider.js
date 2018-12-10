import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCloudUploadAlt,
  faSyncAlt,
  faCopyright,
  faUserCircle,
  faEye,
  faEyeSlash,
  faPencilAlt,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

library.add(faCloudUploadAlt);
library.add(faSyncAlt);
library.add(faCopyright);
library.add(faUserCircle);
library.add(faEye);
library.add(faEyeSlash);
library.add(faPencilAlt);
library.add(faTrashAlt);

const FaProvider = ({ children }) => (
  <Fragment>
    {React.Children.only(children)}
  </Fragment>
);

export default FaProvider;

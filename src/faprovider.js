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
  faSearch,
  faUserAlt,
  faCaretDown,
  faCaretUp,
  faUsers,
  faComments,
  faWrench,
  faPowerOff,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

library.add(faCloudUploadAlt);
library.add(faSyncAlt);
library.add(faCopyright);
library.add(faUserCircle);
library.add(faEye);
library.add(faEyeSlash);
library.add(faPencilAlt);
library.add(faTrashAlt);
library.add(faSearch);
library.add(faUserAlt);
library.add(faCaretDown);
library.add(faCaretUp);
library.add(faUsers);
library.add(faComments);
library.add(faWrench);
library.add(faPowerOff);
library.add(faPlus);

const FaProvider = ({ children }) => (
  <Fragment>
    {React.Children.only(children)}
  </Fragment>
);

export default FaProvider;

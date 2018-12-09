import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCloudUploadAlt,
  faSyncAlt,
  faCopyright,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(faCloudUploadAlt);
library.add(faSyncAlt);
library.add(faCopyright);
library.add(faUserCircle);

const FaProvider = ({ children }) => (
  <Fragment>
    {React.Children.only(children)}
  </Fragment>
);

export default FaProvider;

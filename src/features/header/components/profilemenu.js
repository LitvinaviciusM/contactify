import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuPopup from './menupopup';

class ProfileMenu extends React.Component {
  state = {
    open: false,
  };

  handlePopupState = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;
    const { fullName = 'Test' } = this.props;

    return (
      <div className="header__profile-menu" onClick={this.handlePopupState}>
        <FontAwesomeIcon
          className="user-icon"
          icon="user-alt"
        />
        <span className="display-name">
          {fullName}
        </span>
        <FontAwesomeIcon
          className="caret"
          icon={open ? 'caret-down' : 'caret-up'}
        />
        {open && (
          <MenuPopup />
        )}
      </div>
    );
  }
}

export default ProfileMenu;

import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function UserNavBar({username, deleteUser}) {
  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Hello, {username}!
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={Link} to="/new-world">
            Create A New World
          </DropdownItem>
          <DropdownItem tag={Link} to="/my-worlds">
            Show My Worlds
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/login" onClick={deleteUser}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}

export default UserNavBar;

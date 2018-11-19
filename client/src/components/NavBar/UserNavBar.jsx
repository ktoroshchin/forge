import React from "react";
import { Link } from "react-router-dom";
import { Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import CreateNewWorld from "./CreateNewWorld"

function UserNavBar({username, deleteUserID}) {
  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Hello, {username}!
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={Link} to="/new-world">
            Create A New World
          </DropdownItem>
          <DropdownItem tag={Link} to="/login" onClick={deleteUserID}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  )
}

export default UserNavBar;

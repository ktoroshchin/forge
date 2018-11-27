import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function UserNavBar({ username, deleteUser }) {



  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        HELLO, {username.toUpperCase()}!
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to="/new-world">
          CREATE A NEW WORLD
        </DropdownItem>
        <DropdownItem tag={Link} to="/my-worlds">
          SHOW MY WORLDS
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={deleteUser} tag={Link} to="/login">
          LOGOUT
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

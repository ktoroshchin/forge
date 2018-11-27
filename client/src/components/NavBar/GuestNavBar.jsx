import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function GuestNavBar() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Hello, Guest!
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to="/login">
          Login
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to="/register">
          Register
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

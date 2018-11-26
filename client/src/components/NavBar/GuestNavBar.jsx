import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function GuestNavBar() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <span className="hello-user">HELLO, GUEST!</span>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to="/login">
          LOGIN
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to="/register">
          REGISTER
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

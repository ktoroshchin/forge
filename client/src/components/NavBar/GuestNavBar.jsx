import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function GuestNavBar({onClick}) {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Hello, Guest!
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={()=>onClick()} tag={Link} to="/login">
          Login
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>onClick()} tag={Link} to="/register">
          Register
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

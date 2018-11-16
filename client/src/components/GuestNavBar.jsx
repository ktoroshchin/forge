import React from "react";
import { Link } from "react-router-dom";
import { Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

function GuestNavBar() {
  return (
    <Nav className="ml-auto" navbar>
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
    </Nav>
  )
}

export default GuestNavBar;

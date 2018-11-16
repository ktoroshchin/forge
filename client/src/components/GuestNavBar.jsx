import React from "react";
import { Link } from "react-router-dom";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

function GuestNavBar({cookies}) {
  const userID = cookies.get('userID')
  if (userID) {
    return (
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Hello, {userID}!
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
  } else {
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
}

export default GuestNavBar;

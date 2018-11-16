import React from "react";
import { Link } from "react-router-dom";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

function UserNavBar({userID, deleteUserID}) {
  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Hello, {userID}!
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={Link} to="/login" onClick={deleteUserID}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  )
}

export default UserNavBar;

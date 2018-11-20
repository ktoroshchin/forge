import React from "react";
import { Link } from "react-router-dom";
import { Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

function UserNavBar({username, deleteUser}) {
  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Hello, {username}!
        </DropdownToggle>
        <DropdownMenu right>
        <DropdownItem tag={Link} to="/edit-profile" onClick={()=>{window.location.reload()}}>
            Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="/my-worlds">
            Show My Worlds
          </DropdownItem>
          <DropdownItem tag={Link} to="/new-world">
            Create A New World
          </DropdownItem>
          <DropdownItem tag={Link} to="/login" onClick={deleteUser}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  )
}

export default UserNavBar;

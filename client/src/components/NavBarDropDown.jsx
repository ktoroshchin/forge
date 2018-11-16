import React from "react";
import { Link } from "react-router-dom";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import GuestNavBar from "./GuestNavBar"
import UserNavBar from "./UserNavBar"


function NavBarDropDown({cookies}) {
  const userID = cookies.get('userID')
  if (userID) {
    return (
      <UserNavBar userID={userID}/>
    )
  } else {
    return (
      <GuestNavBar />
    )
  }
}

export default NavBarDropDown;

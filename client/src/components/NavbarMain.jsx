import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import NavBarDropDown from "./NavBarDropDown"

class NavbarMain extends Component {
  state = {
    dropdownOpen: false,
  }
  toggle = this.toggle.bind(this);
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return(
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">THE FORGE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavBarDropDown cookies={this.props.cookies} addUserID={this.props.addUserID} deleteUserID={this.props.deleteUserID} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarMain
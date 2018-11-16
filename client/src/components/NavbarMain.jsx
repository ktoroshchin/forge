import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import GuestNavBar from "./GuestNavBar"

class NavbarMain extends Component {
  state = {
    dropdownOpen: false,
    cookies: this.props.cookies
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
            <GuestNavBar cookies={this.props.cookies} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarMain
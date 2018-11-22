import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import NavBarDropDown from "./NavBarDropDown"

class NavbarMain extends Component {
  state = {
    isOpen: false,
  }
  toggle = this.toggle.bind(this);
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">THE FORGE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavBarDropDown cookies={this.props.cookies} deleteUser={this.props.deleteUser} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarMain
import React, {Component} from 'react';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';
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
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/">THE FORGE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">View All Worlds</NavLink>
              </NavItem>
              <NavBarDropDown cookies={this.props.cookies} deleteUser={this.props.deleteUser} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarMain
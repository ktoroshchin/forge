import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';

import NavBarDropDown from "./NavBarDropDown"

export default class NavbarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">THE FORGE</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="view-all-worlds" href="/all-worlds">VIEW ALL WORLDS</NavLink>
            </NavItem>
            <NavBarDropDown cookies={this.props.cookies} deleteUser={this.props.deleteUser} />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

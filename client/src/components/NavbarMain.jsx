import React, {Component} from 'react';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';


class NavbarMain extends Component {
  state = {
    dropdownOpen: false
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
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hello, Guest!
                </DropdownToggle>
                <DropdownMenu right>

                  <DropdownItem>
                    Login
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Register
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarMain
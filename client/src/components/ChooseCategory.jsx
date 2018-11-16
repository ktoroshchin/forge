import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Collapse, ListGroup,ListGroupItem,Navbar,NavbarToggler,NavbarBrand,Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

class ChooseCategory extends Component {

render() {
  return(
    <div>
      <ListGroup>
        <ListGroupItem tag={Link} to="/updatecity" color="success">City</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    </div>
    )
  }
}
export default ChooseCategory
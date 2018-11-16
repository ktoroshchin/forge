import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Container, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

export default class NewMarkerForm extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      category: "Select Category"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    console.log(event.target.innerText)
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      category: event.target.innerText
    });
  }

  render() {
    const {submitMarker} = this.props
    console.log(this.state)
    return (
      <div>
        <Container className="py-4">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>{this.state.category}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.select}>City</DropdownItem>
            <DropdownItem onClick={this.select}>Town</DropdownItem>
            <DropdownItem onClick={this.select}>Location</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        </Container>
        { this.state.category == "City" &&
                <Form>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2} size="lg">Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail" placeholder="lg" bsSize="lg" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail2" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail2" placeholder="default" />
                    </Col>
                  </FormGroup>
                </Form>
        }
        { this.state.category == "Town" &&
          <span>Town</span>
        }
        { this.state.category == "Location" &&
          <span>Location</span>
        }
        <button onClick={() => {submitMarker()}}>
          Submit
        </button>
      </div>
    )
  }
}
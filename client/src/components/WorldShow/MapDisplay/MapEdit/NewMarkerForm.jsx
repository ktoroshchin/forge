import React, { Component } from 'react';
import { Button, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import ChooseElement from './ChooseElement'


export default class NewMarkerForm extends Component {
constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.select = this.select.bind(this);
  }

  select(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    const { coords, worldID, mapID} = this.props
    return (
      <div>
        <FormGroup>
          <Input onChange={this.select} type="select" name="select" id="categorySelect">
            <option value="">Select a category...</option>
            <option value="City">City</option>
            <option value="Town">Town</option>
            <option value="Location">Location</option>
          </Input>
        </FormGroup>
        {this.state.value === '' &&
        <div>
        <FormGroup>
          <Label for="categorySelect">Choose a...</Label>
          <Input type="select" disabled>
            <option value="">Select...</option>
          </Input>
        </FormGroup>
        <ModalFooter>
          <Button color="success" disabled>Submit</Button>
        </ModalFooter>
        </div>
        }
        {this.state.value !== '' &&
        <div>
          <ChooseElement
            coords={coords}
            worldID={worldID}
            mapID={mapID}
            eleCategory={this.state.value}
          />
        </div>
        }
      </div>
    )
  }
}
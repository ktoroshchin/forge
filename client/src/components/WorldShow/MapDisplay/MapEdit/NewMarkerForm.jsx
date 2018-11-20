import React, { Component } from 'react';
import { Button, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import ChooseCity from './ChooseCity'
import ChooseTown from './ChooseTown'
import ChooseLocation from './ChooseLocation'

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
          <Input onClick={this.select} type="select" name="select" id="categorySelect">
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
        {this.state.value === 'City' &&
        <div>
          <ChooseCity
            coords={coords}
            worldID={worldID}
            mapID={mapID}
          />
        </div>
        }
        {this.state.value === 'Town' &&
        <div>
          <ChooseTown
            coords={coords}
            worldID={worldID}
            mapID={mapID}
          />
        </div>
        }
        {this.state.value === 'Location' &&
        <div>
          <ChooseLocation
            coords={coords}
            worldID={worldID}
            mapID={mapID}
          />
        </div>
        }
      </div>
    )
  }
}
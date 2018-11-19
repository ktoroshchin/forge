import React, {Component} from 'react';
import { Button,ListGroup, ListGroupItem } from 'reactstrap';
import ChooseCategoryToUpdate from './ChooseCategoryToUpdate';
import TableofContents from "./TableofContents"
import City from './City'
import Town from './Town'
import Location from './Location'
import ShowMap from './ShowMap'

class DisplayWorldDetails extends Component {
  state = {
    clicked: false,
    value: "",
    locationID: ""
  };

handleClick = this.handleClick.bind(this)
setValue = this.setValue.bind(this);
setLocationID = this.setLocationID.bind(this);

handleClick() {
  this.setState({
    clicked: true
  });
}
setValue(value) {
  this.setState({
    value: value
  })
}
setLocationID(id) {
  this.setState({
    locationID: id
  })
}

  render() {
    const {worldID, worldName, worldDescription} = this.props.location.state;
    return(
        <div>
        <TableofContents worldID={worldID} worldName={worldName} worldDescription={worldDescription} setValue={this.setValue} setLocationID={this.setLocationID}/>
        <Button onClick={this.handleClick} className="btn btn-success add-world col-md-12">Add New Element</Button>
        <div className="col-md-8">
          {this.state.clicked ? <ChooseCategoryToUpdate /> : null}
        </div>
          {this.state.value === 'City' && <City cityID={this.state.locationID}/>}
          {this.state.value === 'Town' && <Town  townID={this.state.locationID}/>}
          {this.state.value === 'Location' && <Location locationID={this.state.locationID}/>}
        <ShowMap worldID={worldID} />
        </div>
    )
  }
}
export default DisplayWorldDetails
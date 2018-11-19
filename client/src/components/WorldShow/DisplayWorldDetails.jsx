import React, {Component} from 'react';
import { Button,ListGroup, ListGroupItem } from 'reactstrap';
import ChooseCategoryToUpdate from './ChooseCategoryToUpdate';
import TableofContents from "./TableofContents"
import City from './City'
import Town from './Town'
import Location from './Location'
import ShowMap from './MapDisplay/ShowMap'

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const getUserID = function() {
  return cookies.get('userID');
}

export default class DisplayWorldDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      value: "",
      locationID: ""
    };

    this.handleClick = this.handleClick.bind(this)
    this.setValue = this.setValue.bind(this);
    this.setLocationID = this.setLocationID.bind(this);
  }

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

handleRefresh() {
  window.location.reload()
}
  render() {
    const {worldID, worldName, worldDescription} = this.props.location.state;
    const userID = getUserID();

    return(
        <div>
        <TableofContents worldID={worldID} worldName={worldName} worldDescription={worldDescription} setValue={this.setValue} setLocationID={this.setLocationID} handleRefresh={this.handleRefresh}/>
        <Button onClick={this.handleClick} className="btn btn-success add-world col-md-12">Add New Element</Button>
        <div className="col-md-8">
          {this.state.clicked ? <ChooseCategoryToUpdate worldID={worldID} /> : null}
        </div>
          {this.state.value === 'City' && <City cityID={this.state.locationID}/>}
          {this.state.value === 'Town' && <Town  townID={this.state.locationID}/>}
          {this.state.value === 'Location' && <Location locationID={this.state.locationID}/>}
        {this.state.value === '' &&
          <ShowMap worldID={worldID} userID={userID} />
        }

        </div>
    )
  }
}
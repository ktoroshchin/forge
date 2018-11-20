import React, {Component} from 'react';
import { Button,ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";

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
  state = {
    clicked: false,
    value: "",
    locationID: "",
    isUser: false,
  };

handleClick = this.handleClick.bind(this)
setValue = this.setValue.bind(this);
setLocationID = this.setLocationID.bind(this);


handleClick() {
  this.setState({
    clicked: true,
    value: ""
  });
}
setValue(value) {
  this.setState({
    value: value,
    clicked: false
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

componentDidMount() {
  if (getUserID() === this.props.location.state.creatorID) {
    this.setState({
      isUser: true
    })
  }
}
  render() {
    const {worldID, worldName, worldDescription, creatorID} = this.props.location.state;
    const userID = getUserID();

    return(
        <div className="container mt-3">
          <ListGroupItem className="world-name" onClick={this.handleRefresh}>{worldName}</ListGroupItem>
          <ListGroupItem className="world-description">{worldDescription}</ListGroupItem>
          <div className="row mt-3">
            <div className="col-md-4 col-lg-3 col-xl-2">
              <TableofContents handleClick={this.handleClick} worldID={worldID} setValue={this.setValue} setLocationID={this.setLocationID}/>
            </div>
            {this.state.value === '' && !this.state.clicked &&
              <div className="col-md-8 col-lg-9 col-xl-10">
                <ShowMap worldID={worldID} userID={userID} />
                {this.state.isUser === true &&
                  <Link
                    to={{
                      pathname: "/edit-map",
                      state: { worldID: worldID }
                    }}
                  >
                    <Button>Edit Map</Button>
                  </Link>
                }
              </div>
            }
            {(this.state.value !== '' || this.state.clicked) &&
              <div className="col-md-8 col-lg-9 col-xl-10">
                {this.state.value === 'City' && <City cityID={this.state.locationID}/>}
                {this.state.value === 'Town' && <Town  townID={this.state.locationID}/>}
                {this.state.value === 'Location' && <Location locationID={this.state.locationID}/>}
                {this.state.clicked ? <ChooseCategoryToUpdate /> : null}
              </div>
            }
          </div>
        </div>
    )
  }
}
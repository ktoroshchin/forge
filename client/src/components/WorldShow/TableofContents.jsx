import React, { Component } from 'react';
import { Button, Collapse, Card, CardHeader } from 'reactstrap';

import ElementList from './ElementList'

export default class TableofContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityCollapse: false,
      townCollapse: false,
      locationCollapse: false
    };
  }

  toggleCityList = () => {
    this.setState({
      cityCollapse: !this.state.cityCollapse,
      townCollapse: false,
      locationCollapse: false
    });
  }

  toggleTownList = () => {
    this.setState({
      cityCollapse: false,
      townCollapse: !this.state.townCollapse,
      locationCollapse: false
    });
  }

  toggleLocationList = () => {
    this.setState({
      cityCollapse: false,
      townCollapse: false,
      locationCollapse: !this.state.locationCollapse
    });
  }

  render = () => {
    const { worldID, handleClick, setValue, setLocationID, isUser } = this.props;
    const tOCClassName = 'text-center pointer border border-top-0';
    const tOCStyle = {
      backgroundColor: 'white',
      color: 'black',
      borderColor: '#595959'
    };

    return (
      <div>
        <Card
          inverse
          className="ml-4 border-0 p-2"
          style={{
            backgroundColor: '#595959',
          }}
        >
          {isUser &&
            <Button color="primary" size="sm" onClick={handleClick}>
              Add New Element
            </Button>
          }
          <CardHeader className="text-center default border" style={tOCStyle}>
            <h3>Table of Contents</h3>
          </CardHeader>
          <CardHeader onClick={this.toggleCityList} className={tOCClassName}>Cities</CardHeader>
          <Collapse isOpen={this.state.cityCollapse}>
            <ElementList
              worldID={worldID}
              category="City"
              setValue={setValue}
              setLocationID={setLocationID}
            />
          </Collapse>
          <CardHeader onClick={this.toggleTownList} className={tOCClassName}>Towns</CardHeader>
          <Collapse isOpen={this.state.townCollapse}>
            <ElementList
              worldID={worldID}
              category="Town"
              setValue={setValue}
              setLocationID={setLocationID}
            />
          </Collapse>
          <CardHeader onClick={this.toggleLocationList} className={tOCClassName}>Locations</CardHeader>
          <Collapse isOpen={this.state.locationCollapse}>
            <ElementList
              worldID={worldID}
              category="Location"
              setValue={setValue}
              setLocationID={setLocationID}
            />
          </Collapse>
        </Card>
      </div>
    )
  }
}

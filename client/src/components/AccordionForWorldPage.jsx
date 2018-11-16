import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';

class AccordionForWorldPage extends Component {

  render(){
    return(
      <div>
        <ListGroupItem className="world-name-container">
          World 1
        </ListGroupItem>

        <div className="wrapper">
          <div className="listGroup">
            <ListGroupItem className="table-of-contents">
              Table of contents
            </ListGroupItem>

            <ListGroupItem color="primary" id="toggler">
              Cities
            </ListGroupItem>
            <UncontrolledCollapse toggler="#toggler">
              <ListGroup className="listItemContainer">
                <ListGroupItem tag="a" className="listItem" href="#" action>City1</ListGroupItem>
                <ListGroupItem tag="a" className="listItem" href="#" action>City2</ListGroupItem>
                <ListGroupItem tag="a" className="listItem" href="#" action>CIty3</ListGroupItem>
              </ListGroup>
            </UncontrolledCollapse>
          </div>

          <div className="listGroup">
            <ListGroupItem color="primary" id="toggler2" >
              Towns
            </ListGroupItem>
            <UncontrolledCollapse toggler="#toggler2">
              <ListGroup className="listItemContainer">
                <ListGroupItem tag="a" className="listItem" href="#" action>Town1</ListGroupItem>
                <ListGroupItem tag="a" className="listItem" href="#" action>Town2</ListGroupItem>
                <ListGroupItem tag="a" className="listItem" href="#" action>Town3</ListGroupItem>
              </ListGroup>
            </UncontrolledCollapse>
          </div>

            <div className="listGroup">
              <ListGroupItem color="primary" id="toggler3">
                Locations
              </ListGroupItem>
              <UncontrolledCollapse toggler="#toggler3">
                <ListGroup className="listItemContainer">
                  <ListGroupItem tag="a" className="listItem" href="#" action>Location1</ListGroupItem>
                  <ListGroupItem tag="a" className="listItem" href="#" action>Location2</ListGroupItem>
                  <ListGroupItem tag="a" className="listItem" href="#" action>Location3</ListGroupItem>
                </ListGroup>
              </UncontrolledCollapse>
            </div>
          </div>
      </div>
    );
  }
};

export default AccordionForWorldPage;

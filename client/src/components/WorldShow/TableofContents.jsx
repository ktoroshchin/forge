import React, {Component} from 'react';
import { Button,ListGroup, ListGroupItem } from 'reactstrap';
import ChooseCategoryToUpdate from './ChooseCategoryToUpdate';
import CityList from './CityList'
import TownList from './TownList'
import LocationList from './LocationList'

function TableofContents({worldID, worldName, worldDescription, setValue, setLocationID}) {
  return (
    <div className="AccordionForWorldPage">
      <ListGroupItem className="world-name">{worldName}</ListGroupItem>
      <ListGroupItem className="world-description">{worldDescription}</ListGroupItem>
      <div className="row">
        <div id="accordion" className="page-align col-md-3">
          <div className="card" className="listGroup">
            <div className="card-header" id="headingOne">
              <button className="btn btn-link category" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Cities
              </button>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body nopadding">
                <ListGroup className="listItemContainer">
                  <CityList worldID={worldID} setValue={setValue} setLocationID={setLocationID} />
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="card" className="listGroup">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link category collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Towns
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body nopadding">
                <ListGroup className="listItemContainer">
                  <TownList worldID={worldID} setValue={setValue} setLocationID={setLocationID} />
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="card" className="listGroup">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link category collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Locations
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body nopadding">
                <ListGroup className="listItemContainer">
                  <LocationList worldID={worldID} setValue={setValue} setLocationID={setLocationID} />
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TableofContents;
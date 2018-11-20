import React from "react";
import { ListGroup,ListGroupItem } from 'reactstrap';
import CreateNewCity from './CreateNewCity'
import CreateNewTown from './CreateNewTown'
import CreateNewLocation from './CreateNewLocation'

function ChooseCategoryToCreate ({worldID}) {
  return(
    <div className="ChooseCategoryToUpdate">
      <div className="update-categories">
        <ListGroupItem className="category">Category</ListGroupItem>
        <div id="accordionUpdate">
          <div className="card">
            <div className="card-header" id="headingOne">
                <button className="btn btn-link form collapsed"  data-toggle="collapse" data-target="#collapseCities" aria-expanded="false" aria-controls="collapseOne">
                  Cities
                </button>
            </div>

            <div id="collapseCities" className="collapse" aria-labelledby="headingOne" data-parent="#accordionUpdate">
              <div className="card-body">
                <ListGroup className="listItemContainer">
                  <CreateNewCity worldID={worldID} />
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingOne">
                <button className="btn btn-link form collapsed"  data-toggle="collapse" data-target="#collapseTowns" aria-expanded="false" aria-controls="collapseOne">
                  Towns
                </button>
            </div>

            <div id="collapseTowns" className="collapse" aria-labelledby="headingOne" data-parent="#accordionUpdate">
              <div className="card-body">
                <ListGroup className="listItemContainer">
                  <CreateNewTown worldID={worldID} />
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link form collapsed" data-toggle="collapse" data-target="#collapseLocations" aria-expanded="false" aria-controls="collapseThree">
                  Locations
                </button>
              </h5>
            </div>
            <div id="collapseLocations" className="collapse" aria-labelledby="headingThree" data-parent="#accordionUpdate">
              <div className="card-body">
                <ListGroup className="listItemContainer">
                  <CreateNewLocation worldID={worldID} />
                </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default ChooseCategoryToCreate;
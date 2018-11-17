import React, {Component} from 'react';
import { Button,ListGroup, ListGroupItem } from 'reactstrap';
import ChooseCategoryToUpdate from './ChooseCategoryToUpdate';

class DisplayWorldDetails extends Component {
  state = {
    clicked: false
  };

handleClick = this.handleClick.bind(this)

handleClick() {
  this.setState({
    clicked: true
  });
}


  render() {
    return(
      <div className="AccordionForWorldPage "  >
        <ListGroupItem className="world-name ">World</ListGroupItem>
        <div className="row">
          <div id="accordion" className="page-align col-md-3">
            <div className="card" className="listGroup">
              <div className="card-header" id="headingOne">
                <button className="btn btn-link category"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Cities
                </button>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body nopadding">
                  <ListGroup className="listItemContainer">
                    <ListGroupItem tag="a" className="listItem" href="#" action>City1</ListGroupItem>
                    <ListGroupItem tag="a" className="listItem" href="#" action>City2</ListGroupItem>
                    <ListGroupItem tag="a" className="listItem" href="#" action>City3</ListGroupItem>
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
                    <ListGroupItem tag="a" className="listItem" href="#" action>Town1</ListGroupItem>
                    <ListGroupItem tag="a" className="listItem" href="#" action>Town2</ListGroupItem>
                    <ListGroupItem tag="a" className="listItem" href="#" action>Town3</ListGroupItem>
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
                    <ListGroupItem tag="a" className="listItem" href="#" action>Location1</ListGroupItem>
                    <ListGroupItem tag="a" className="listItem" href="#" action>Location2</ListGroupItem>
                    <ListGroupItem tag="a" className="listItem" href="#" action>Location3</ListGroupItem>
                  </ListGroup>
              </div>
            </div>
          </div>
          <Button onClick={this.handleClick} className="btn btn-success add-world col-md-12">Add World</Button>
          </div>
          <div className="col-md-8">
            {this.state.clicked ? <ChooseCategoryToUpdate /> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default DisplayWorldDetails
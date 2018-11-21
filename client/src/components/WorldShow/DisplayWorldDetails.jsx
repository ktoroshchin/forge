import React, {Component} from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import ChooseCategoryToCreate from './CreateElement/ChooseCategoryToCreate';
import TableofContents from "./TableofContents"
import City from './City'
import Town from './Town'
import Location from './Location'
import ShowMap from './MapDisplay/ShowMap'
import Cookies from 'universal-cookie';

import EditWorld from './EditElement/EditWorld'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
    modal: false
  };

handleClick = this.handleClick.bind(this)
setValue = this.setValue.bind(this);
setLocationID = this.setLocationID.bind(this);
toggleModal = this.toggleModal.bind(this);

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

toggleModal() {
  this.setState({
    modal: !this.state.modal
  });
}

componentWillMount() {
  if (!this.props.location.state) {
    return window.location.href = '/'
  }
}

componentDidMount() {
  if (getUserID() === this.props.location.state.creatorID) {
    this.setState({
      isUser: true
    })
  }
}
  render() {
    const {worldID} = this.props.location.state;
    const findWorld =
      gql`
        query {
          findWorlds(id: "${worldID}"){
            name
            description
          }
        }`;

    return(
        <div className="container mt-3">
        <Query query={findWorld}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              <div>
                <h1 className="world-name col" onClick={this.handleRefresh}>{data.findWorlds[0].name}</h1>
              </div>
            )
          }}
        </Query>
          <div className="row mt-3">
            <div className="col-md-4 col-lg-3 col-xl-2">
              <TableofContents handleClick={this.handleClick} worldID={worldID} setValue={this.setValue} setLocationID={this.setLocationID} isUser={this.state.isUser}/>
            </div>
            {this.state.value === '' && !this.state.clicked &&
              <div className="col-md-8 col-lg-9 col-xl-10">
               <Query query={findWorld}>
                  {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    return (
                      <div>
                        <h3 className="text-center">{data.findWorlds[0].description}</h3>
                      </div>
                    )
                  }}
                </Query>
              {/*Modal for Edit World Details*/}
                {this.state.isUser &&
                  <div>
                  <Button className="btn btn-success add-world col-md-12" onClick={this.toggleModal}>Edit World Details</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Edit World Details</ModalHeader>
                      <EditWorld
                        toggleModal={this.toggleModal}
                        worldID={worldID}
                            />
                  </Modal>
                  </div>
                }

                <ShowMap worldID={worldID} isUser={this.state.isUser} />
              </div>
            }
            {(this.state.value !== '' || this.state.clicked) &&
              <div className="col-md-8 col-lg-9 col-xl-10">
                {this.state.value === 'City' && <City cityID={this.state.locationID} isUser={this.state.isUser} />}
                {this.state.value === 'Town' && <Town  townID={this.state.locationID} isUser={this.state.isUser} />}
                {this.state.value === 'Location' && <Location locationID={this.state.locationID} isUser={this.state.isUser} />}
                {this.state.clicked ? <ChooseCategoryToCreate worldID={worldID}/> : null}
              </div>
            }
          </div>
        </div>
    )
  }
}
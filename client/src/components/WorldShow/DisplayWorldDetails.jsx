import React, {Component} from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import ChooseCategoryToCreate from './CreateElement/ChooseCategoryToCreate';
import TableofContents from "./TableofContents"
import ElementInfo from './ElementInfo'
import ShowMap from './MapDisplay/ShowMap'
import Cookies from 'universal-cookie';
import Sidebar from "react-sidebar";


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
    modal: false,
    sidebarOpen: true
  }


handleClick = this.handleClick.bind(this)
setValue = this.setValue.bind(this);
setLocationID = this.setLocationID.bind(this);
toggleModal = this.toggleModal.bind(this);
onSetSidebarOpen = this.onSetSidebarOpen.bind(this);


onSetSidebarOpen(open) {
   this.setState({ sidebarOpen: open });
 }

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
            <i onClick={() => this.onSetSidebarOpen(true)} className="fas fa-angle-right"></i>
            <Sidebar
              sidebar={<TableofContents handleClick={this.handleClick} worldID={worldID} setValue={this.setValue} setLocationID={this.setLocationID} isUser={this.state.isUser}/>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { background: "white" } }}
            >
          </Sidebar>
            <div className="col-md-4 col-lg-3 col-xl-2">




            </div>
            {this.state.value === '' && !this.state.clicked &&
              <div className="col-md-8 col-lg-9 col-xl-10">
               <Query query={findWorld}>
                  {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    return (
                      <div>
                        <h3>Description</h3>
                        <h6>{data.findWorlds[0].description}</h6>
                      </div>
                    )
                  }}
                </Query>
              {/*Modal for Edit World Details*/}
                {this.state.isUser &&
                  <div>
                  <Button className="btn btn-outline-success btn-sm add-world" onClick={this.toggleModal}>Edit World Details</Button>
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
                {this.state.value !== '' && <ElementInfo markerID={this.state.locationID} isUser={this.state.isUser} />}
                {this.state.clicked ? <ChooseCategoryToCreate worldID={worldID}/> : null}
              </div>
            }
          </div>
        </div>
    )
  }
}
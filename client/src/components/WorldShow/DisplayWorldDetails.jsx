import React, {Component} from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { CSSTransitionGroup } from 'react-transition-group'
import Cookies from 'universal-cookie';

import ChooseCategoryToCreate from './CreateElement/ChooseCategoryToCreate';
import TableofContents from "./TableofContents"
import ElementInfo from './ElementInfo'
import ShowMap from './MapDisplay/ShowMap'
import EditWorld from './EditElement/EditWorld'

const cookies = new Cookies();

const getUserID = () => {
  return cookies.get('userID');
}

export default class DisplayWorldDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      value: "",
      locationID: "",
      isUser: false,
      modal: false,
      sidebarOpen: false,
    }
  };

  sideBarToggle = () => {
     this.setState({ sidebarOpen: !this.state.sidebarOpen });
   }

  handleClick = () => {
    this.setState({
      clicked: true,
      value: ""
    });
    this.sideBarToggle()
  }

  setValue = (value) => {
    this.setState({
      value: value,
      clicked: false,
    })
    this.sideBarToggle()
  }

  setLocationID = (id) => {
    this.setState({
      locationID: id
    })
  }

  handleRefresh = () => {
    window.location.reload()
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillMount = () => {
    if (!this.props.location.state) {
      return window.location.href = '/'
    }
  }

  componentDidMount = () => {
    if (getUserID() === this.props.location.state.creatorID) {
      this.setState({
        isUser: true
      })
    }
  }

  getWorldName = (query) => {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Fetching"
          } else if (error) {
            return "Error"
          } else {
            return data.findWorlds[0].name
          }
        }}
      </Query>
    )
  }

  getWorldDescription = (query) => {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Fetching"
          } else if (error) {
            return "Error"
          } else if (!data.findWorlds[0].description) {
            return "No description"
          } else {
            return data.findWorlds[0].description
          }
        }}
      </Query>
    )
  }

  render = () => {
    const {worldID, creatorID} = this.props.location.state;
    const findWorld = gql`
      query {
        findWorlds(id: "${worldID}"){
          name
          description
        }
      }`;

    return (
        <div className="container page">
          <div className="container">
            <div className="display-worldname row header" >
              <div className="navbar-arrow pointer" onClick={this.sideBarToggle}>
                {!this.state.sidebarOpen && <i className="fas fa-arrow-right fa-2x"></i>}
                {this.state.sidebarOpen && <i className="fas fa-arrow-left fa-2x"></i>}
              </div>
              <h1 className="pointer" onClick={this.handleRefresh}>{this.getWorldName(findWorld)}</h1>
            </div>
          </div>
          <CSSTransitionGroup
            className="sideBar"
            transitionName="sideBar"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}>
            {this.state.sidebarOpen &&
              <TableofContents
                handleClick={this.handleClick}
                worldID={worldID}
                setValue={this.setValue}
                setLocationID={this.setLocationID}
                isUser={this.state.isUser}
              />
            }
          </CSSTransitionGroup>
          <div className="info">
            {this.state.value === '' && !this.state.clicked &&
              <div className="col-12">
                  <div className="d-flex justify-content-between">
                    <h3 className="default">Description</h3>
                    {this.state.isUser &&
                      <div>
                        <Button
                          color="success"
                          size="sm"
                          onClick={this.toggleModal}
                        >
                          Edit World Details
                        </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                          <ModalHeader className="default" toggle={this.toggleModal}>Edit World Details</ModalHeader>
                            <EditWorld
                              toggleModal={this.toggleModal}
                              worldID={worldID}
                            />
                        </Modal>
                      </div>
                    }
                  </div>
                <h6 className="default">{this.getWorldDescription(findWorld)}</h6>
                <ShowMap
                  worldID={worldID}
                  isUser={this.state.isUser}
                  creatorID={creatorID}
                />
              </div>
            }
            {(this.state.value !== '' || this.state.clicked) &&
              <div className="col-md-12 col-lg-12 col-xl-12">
                {this.state.value !== '' && <ElementInfo markerID={this.state.locationID} isUser={this.state.isUser} />}
                {this.state.clicked ? <ChooseCategoryToCreate worldID={worldID}/> : null}
              </div>
            }
          </div>
        </div>
    )
  }
}

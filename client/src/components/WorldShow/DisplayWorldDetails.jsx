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

  refreshComponent = () => {
    this.setState({
      refresh: !this.state.refresh
    })
  }

  componentDidMount = () => {
    if (getUserID() === this.props.location.state.creatorID) {
      this.setState({
        isUser: true
      })
    }
  }

  render() {
    const {worldID, creatorID} = this.props.location.state;
    const findWorld =
      gql`
        query {
          findWorlds(id: "${worldID}"){
            name
            description
          }
        }`;
    const noMargin = {
      marginLeft: "0"
    }

    return(
        <div className="container page">
          <Query query={findWorld}>
            {
              ({ loading, error, data }) => {
                if (loading) {
                  return <div>Fetching</div>
                } else if (error) {
                  return <div>Error</div>
                } else {
                  return (
                    <div className="container">
                      <div className="display-worldname row" >
                        <div className="navbar-arrow pointer" onClick={this.sideBarToggle}>
                          {!this.state.sidebarOpen && <i className="fas fa-arrow-right fa-2x"></i>}
                          {this.state.sidebarOpen && <i className="fas fa-arrow-left fa-2x"></i>}
                        </div>
                        <h1 className="pointer" onClick={this.handleRefresh}>
                          {data.findWorlds[0].name}
                        </h1>
                      </div>
                    </div>
                  )
                }
              }
            }
          </Query>
          <div className="sideBar">
            <CSSTransitionGroup
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
          </div>
          <div className="info row mt-3" style={noMargin}>
            {this.state.value === '' && !this.state.clicked &&
              <div className="col-12">
               <Query query={findWorld}>
                  {
                    ({ loading, error, data }) => {
                      if (loading) {
                        return <div>Fetching</div>
                      } else if (error) {
                        return <div>Error</div>
                      } else {
                        return (
                          <div>
                            <div className="d-flex justify-content-between">
                              <h3 className="default">Description</h3>
                              {this.state.isUser &&
                                <div>
                                  <Button
                                    outline
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
                            {data.findWorlds[0].description &&
                              <h6 className="default">{data.findWorlds[0].description}</h6>
                            }
                            {!data.findWorlds[0].description &&
                              <h6 className="default">No description</h6>
                            }
                          </div>
                        )
                      }
                    }
                  }
                </Query>
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

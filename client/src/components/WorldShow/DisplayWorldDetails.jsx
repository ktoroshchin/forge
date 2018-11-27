import React, { Component } from 'react';
import { Button, Modal, ModalHeader, Container, Col } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { CSSTransitionGroup } from 'react-transition-group'
import Cookies from 'universal-cookie';

import ChooseCategoryToCreate from './CreateElement/ChooseCategoryToCreate';
import TableofContents from "./TableofContents"
import ElementInfo from './ElementInfo'
import ShowMap from './MapDisplay/ShowMap'
import EditWorld from './EditElement/EditWorld'
import ElementSearchBar from "./ElementSearchBar"
import SearchElementList from "./SearchElementList"

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
      search: ""
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
    if (value !== 'search') {
      this.sideBarToggle()
    }
  }

  setLocationID = (id) => {
    this.setState({
      locationID: id
    })
  }

  setSearch = (search) => {
    this.setState({
      search: search
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
    const { worldID, creatorID } = this.props.location.state;
    const findWorld = gql`
      query {
        findWorlds(id: "${worldID}"){
          name
          description
        }
      }`;

    return (
      <Container className="custom-container">
        <Container>
          <div className="display-worldname custom-row header" >
            <div className="navbar-arrow pointer" onClick={this.sideBarToggle}>
              {!this.state.sidebarOpen && <i className="fas fa-arrow-right fa-2x"></i>}
              {this.state.sidebarOpen && <i className="fas fa-arrow-left fa-2x"></i>}
            </div>
            <h1 className="pointer" onClick={this.handleRefresh}>{this.getWorldName(findWorld)}</h1>
          </div>
          <Container className="bottom-spacing">
            <ElementSearchBar worldID={worldID} setValue={this.setValue} setSearch={this.setSearch}/>
          </Container>
        </Container>
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
        <Container>
          <div className="custom-row">
            {this.state.value === '' && !this.state.clicked &&
              <Col>
                  <div className="bottom-spacing justified">
                    <h3 className="default">Description</h3>
                    {this.state.isUser &&
                      <div>
                        <Button
                          color="warning"
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
                <h6 className="default bottom-spacing pb-3">{this.getWorldDescription(findWorld)}</h6>
                <ShowMap
                  worldID={worldID}
                  isUser={this.state.isUser}
                  creatorID={creatorID}
                />
              </Col>
            }
            {(this.state.value !== '') &&
              <div className="col-md-12 col-lg-12 col-xl-12">
                {this.state.value === 'search' && <SearchElementList worldID={worldID} search={this.state.search}/> }
                {this.state.value !== 'search' && <ElementInfo markerID={this.state.locationID} isUser={this.state.isUser} />}
              </div>
            }
            {this.state.clicked &&
              <div className="col-md-12 col-lg-12 col-xl-12">
                <ChooseCategoryToCreate worldID={worldID}/>
              </div>
            }
          </div>
        </Container>
      </Container>
    )
  }
}

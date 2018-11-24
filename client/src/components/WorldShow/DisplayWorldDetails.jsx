import React, {Component} from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import ChooseCategoryToCreate from './CreateElement/ChooseCategoryToCreate';
import TableofContents from "./TableofContents"
import ElementInfo from './ElementInfo'
import ShowMap from './MapDisplay/ShowMap'
import Cookies from 'universal-cookie';
import EditWorld from './EditElement/EditWorld'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { CSSTransitionGroup } from 'react-transition-group'


const cookies = new Cookies();
const getUserID = function() {
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
    this.handleClick = this.handleClick.bind(this)
    this.setValue = this.setValue.bind(this);
    this.setLocationID = this.setLocationID.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.sideBarToggle = this.sideBarToggle.bind(this);
  }
  sideBarToggle() {
     this.setState({ sidebarOpen: !this.state.sidebarOpen });
   }
  handleClick() {
    this.setState({
      clicked: true,
      value: ""
    });
    this.sideBarToggle()
  }
  setValue(value) {
    this.setState({
      value: value,
      clicked: false,
    })
    this.sideBarToggle()
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
  refreshComponent() {
    this.setState({
      refresh: !this.state.refresh
    })
  }
  componentDidMount() {
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
    return(
        <div className="container page ">
          <Query query={findWorld}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              return (
                <div className="container">
                  <div className="dipslay-worldname row">
                    <div className="col-1 navbar-arrow" onClick={this.sideBarToggle}>
                      {!this.state.sidebarOpen && <i className="fas fa-arrow-right fa-2x"></i>}
                      {this.state.sidebarOpen && <i className="fas fa-arrow-left fa-2x"></i>}
                    </div>
                    <div className="col-11 col-xs-8 world-name">
                      <h1 onClick={this.handleRefresh}>s
                        {data.findWorlds[0].name}
                      </h1>
                      </div>
                  </div>
                </div>
              )
            }}
          </Query>
          <div className="sideBar">
            <CSSTransitionGroup
              transitionName="sideBar"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={200}>
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
          <div className="row mt-3">
            {this.state.value === '' && !this.state.clicked &&
              <div className="col-12">
               <Query query={findWorld}>
                  {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    if (!data.findWorlds[0].description) return (
                      <div>
                        <h3>Description</h3>
                        <h6>No description</h6>
                      </div>
                    )
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
                <ShowMap
                  worldID={worldID}
                  isUser={this.state.isUser}
                  creatorID={creatorID}
                />
              </div>
            }
            {(this.state.value !== '' || this.state.clicked) &&
              <div className="col-12">
                {this.state.value !== '' && <ElementInfo markerID={this.state.locationID} isUser={this.state.isUser} />}
                {this.state.clicked ? <ChooseCategoryToCreate worldID={worldID}/> : null}
              </div>
            }
          </div>
        </div>
    )
  }
}

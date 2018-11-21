import React, {Component} from "react";
import { Button, ModalFooter, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class WorldMapSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      imgSize: {
        width: 0,
        height: 0,
      },
      worldMap: true,
    }
    console.log(this.props)
    this.handleChange = this.handleChange.bind(this)
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onImgLoad({target:img}) {
    this.setState({imgSize:{
      height:img.offsetHeight,
      width:img.offsetWidth
    }});
  }

  handleConfirm(event) {
    event.preventDefault();
    window.location.reload();
  }


  render() {
    const {worldID} = this.props;
    const imageURL = this.state.value;
    const width = this.state.imgSize.width;
    const height = this.state.imgSize.height;
    const worldMap = this.state.worldMap;

    const POST_MUTATION = gql`
      mutation (
        $world_id: ID!,
        $url: String!,
        $width: Int!,
        $height: Int!,
        $world_map: Boolean!){
        createNewMap(
          world_id: $world_id,
          url: $url,
          world_map: $world_map,
          width: $width,
          height: $height
          ){
            id
          }
        }`
    return (
      <div>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="imageURL">Image URL:</Label>
              <Input
                type="url"
                name="imageURL"
                id="imageURL"
                placeholder="Enter an image URL..."
                value={this.state.value}
                onChange={this.handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {this.state.value.match(/\.(jpeg|jpg|png)$/) === null &&
            <div>
              <span>Please enter a valid image URL.</span>
            </div>
          }
          {this.state.value.match(/\.(jpeg|jpg|png)$/) !== null &&
            <div>
            <Mutation
              mutation={POST_MUTATION}
              variables={{
                "world_id": worldID,
                "url": imageURL,
                width,
                height,
                "world_map": worldMap }}>
                {postMutation => <Button color="success" onClick={(event) => {postMutation(); this.handleConfirm(event)}}>Confirm</Button>}
            </Mutation>
            <img alt="Map" onLoad={this.onImgLoad} src={this.state.value} style={{visibility: "hidden",}}/>
            </div>
          }
        </ModalFooter>
      </div>
      )
  }
}

export default WorldMapSubmit;

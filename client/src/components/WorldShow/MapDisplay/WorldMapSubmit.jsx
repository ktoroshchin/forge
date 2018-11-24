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
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    },
    () => {
      this.getImageSize(this.state.value, this)
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  getImageSize = (url, state) => {
    const img = new Image();
    img.onload = function() {
      const imgHeight = this.height
      const imgWidth = this.width

      state.setState({
        imgSize:{
          width: imgWidth,
          height: imgHeight
        }
      })
    };
    img.src = url
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert('Issue with URL')
      })
  }

  render = () => {
    const { worldID } = this.props;
    const imageURL = this.state.value;
    const width = this.state.imgSize.width;
    const height = this.state.imgSize.height;

    const POST_MUTATION = gql`
      mutation (
        $world_id: ID!,
        $url: String!,
        $width: Int!,
        $height: Int!){
        createNewWorldMap(
          world_id: $world_id,
          url: $url,
          width: $width,
          height: $height
          ){
            id
          }
        }`
    return (
      <div>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="imageURL">Image URL:</Label>
              <Input
                type="url"
                name="imageURL"
                id="imageURL"
                placeholder="Enter an image URL..."
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {this.state.value.match(/\.(jpeg|jpg|png)$/) === null &&
            <span>Please enter a valid image URL.</span>
          }
          {this.state.value.match(/\.(jpeg|jpg|png)$/) !== null &&
            <div>
              {this.state.imgSize.width === 0 &&
                <span>Obtaining image...</span>
              }
              {this.state.imgSize.width !== 0 &&
              <Mutation
                mutation={POST_MUTATION}
                variables={{
                  "world_id": worldID,
                  "url": imageURL,
                  width,
                  height
                }}
              >
                  {postMutation =>
                    <Button
                      color="success"
                      onClick={() => {this.handleMutationSubmit(postMutation)}}
                    >
                      Submit
                    </Button>}
              </Mutation>
              }
            </div>
          }
        </ModalFooter>
      </div>
      )
  }
}

export default WorldMapSubmit;

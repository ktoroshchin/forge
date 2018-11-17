import React, {Component} from "react";

class WorldMapSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      imgSize: {
        width: 0,
        height: 0,
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getImageSize = this.getImageSize.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getImageSize(url, classThis) {
    const img = new Image()
    img.onload = function() {
      classThis.setState({
        imgSize: {
          width: this.width,
          height: this.height,
      }},
      () => console.log(classThis.state)
      )

    }
    img.src = url
  }

  handleSubmit(event) {
    this.getImageSize(this.state.value, this)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Submit Your World Map</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Image URL:
            <input
              type="url"
              value={this.state.value}
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
  }
}

export default WorldMapSubmit;

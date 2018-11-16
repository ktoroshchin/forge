import React from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "300px"
};

class Test extends React.Component {
  componentDidMount() {
    // create map
    this.bound = [[0, 0], [1024, 2048]]
    this.center = [512, 1024]
    this.map = L.map('mapid', {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 3,
      bounds: this.bound,
    });
    L.imageOverlay('http://www.online-tabletop.com/wp-content/uploads/2017/01/tutoriala.jpg', this.bound).addTo(this.map)
  }
  componentDidUpdate() {
  }

  render() {
    return <div id="mapid" style={style} />;
  }
}

export default Test;

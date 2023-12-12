import React, { useContext } from 'react';
import * as d3 from 'd3';
import { geoGraticule, geoPath, geoOrthographic } from 'd3';
import "./Globe.scss";

class Globe extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      rotation: 0,
      size: window.innerWidth/3
    }
  }
  
  render() {
    let graticule = d3.geoGraticule()
      .step([10, 10])
    let projection = d3.geoOrthographic()
      .fitSize([this.state.size, this.state.size], this.props.geoJson)
      .rotate([this.state.rotation])
    
    let geoGenerator = d3.geoPath()
      .projection(projection)
    
    let pathString = geoGenerator(this.props.geoJson)

    window.requestAnimationFrame(() => {
      this.setState({
        rotation: this.state.rotation + 0.1
      })
    })
    
    return <svg width={this.state.size} height={this.state.size} >
      <path d={pathString} />
    </svg>
  }
  updateDimensions = () => {
    this.setState({ size: window.innerWidth/3});
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}

export default Globe;
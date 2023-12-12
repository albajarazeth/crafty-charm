import { geoGraticule, geoPath, geoOrthographic } from 'd3';

const graticule = geoGraticule()
  .step([10, 10])
var projection = geoOrthographic()
  .center([0, 0]) 
  .scale(250)
  .clipAngle(90 )
  .translate([960 / 2, 500 / 3]) 
  .rotate([0,0])
const path = geoPath(projection)
const Map = {
  path,
  graticule,
  projection,
  rotate: (rotateChange = [10]) => {
    projection.rotate(projection.rotate() + rotateChange)
    return projection.rotate()
  }
}

export default Map;
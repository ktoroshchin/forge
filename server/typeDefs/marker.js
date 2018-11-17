const queryType = `
  findMarkerById(id: ID!): Marker!
  findMarkersByMapId(map_id: ID!): [Marker!]`;

const mutationType = `
  createNewMarker(map_id: ID!, latitude: Float!, longitude: Float!): Marker!
  bulkEditMarker(id: ID!, map_id: ID!, latitude: Float!, longitude: Float!): Marker!`;

const modelType = `
  type Marker {
    id: ID!
    map_id: ID!
    latitude: Float!
    longitude: Float!
  }

  interface MapMarker {
    id: ID!
    marker_id: ID
    world_id: ID!
    name: String!
  }`;
  
module.exports = { queryType, mutationType, modelType }
module.exports = Mutation = `type Mutation {
  register(username: String!, email: String!, password: String!, first_name: String, last_name: String): User!
  editUserInfo(id: ID!, password: String!, first_name: String, last_name: String): User!
  login(username: String!, password: String!): User!

  createNewWorld(name: String!, creator_id: ID!, description: String): World!
  editWorldInfo(id: ID!, name: String, creator_id: ID!, description: String): World!
  removeWorldById(id: ID!): Boolean

  createNewWorldMap(world_id: ID!, url: String!, width: Int!, height: Int!): WorldMap!
  createNewMarkerMap(marker_id: ID!, url: String!, width: Int!, height: Int!): MarkerMap!
  editMapInfo(id: ID!, world_id: ID!, url: String!, width: Int!, height: Int!, world_map: Boolean!): WorldMap!
  removeMapById(id: ID!): Boolean
  
  createNewMarker(category: String!, world_id: ID!, name: String!, population: Int, government: String, description: String, map_id: ID, latitude: Float, longitude: Float): Marker!
  editMarkerInfo(id: ID!, name: String, population: Int, government: String, description: String): Marker!
  placeMarkerOnMap(id: ID!, map_id: ID!, latitude: Float!, longitude: Float!): Marker!
  removeMarkerById(id: ID!): Boolean
  removeAllMarkersOnMap(map_id: ID!): Boolean
  destroyMarker(id: ID!): Boolean
}`;
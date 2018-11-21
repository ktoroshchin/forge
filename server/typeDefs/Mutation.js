module.exports = Mutation = `type Mutation {
  createNewUser(username: String!, email: String!, password: String!, first_name: String, last_name: String): User!
  bulkEditUser(id: ID!, password: String!, first_name: String, last_name: String): User!
  login(username: String!, password: String!): User!

  createNewWorld(name: String!, creator_id: ID!, description: String): World!
  bulkEditWorld(id: ID!, name: String, creator_id: ID!, description: String): World!

  createNewMap(world_id: ID!, url: String!, world_map: Boolean!, width: Int!, height: Int!): Map!
  bulkEditMap(id: ID!, world_id: ID!, url: String!, width: Int!, height: Int!, world_map: Boolean!): Map!
  
  createNewMarker(category: String!, world_id: ID!, name: String!, population: Int, government: String, description: String, map_id: ID, latitude: Float, longitude: Float): Marker!
  editMarkerInfo(id: ID!, name: String, population: Int, government: String, description: String): Marker!
  placeMarkerOnMap(id: ID!, map_id: ID!, latitude: Float!, longitude: Float!): Marker!
  removeMarkerById(id: ID!): Marker
  removeAllMarkersOnMap(map_id: ID!): Map
}`;
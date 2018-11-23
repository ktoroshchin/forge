module.exports = Query = `type Query {
  findUsers(id: ID, username: String): [User!]

  findWorlds(id: ID, creator_id: ID, name: String): [World!]
  searchWorlds(name: String!): [World!]

  findWorldMap(world_id: ID): WorldMap
  findMarkerMap(marker_id: ID): MarkerMap

  findMarkers(world_id: ID, id: ID, map_id: ID, category: String): [Marker!]
}`;
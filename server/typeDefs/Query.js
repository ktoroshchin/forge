module.exports = Query = `type Query {
  findUsers(id: ID, username: String): [User!]

  findWorlds(id: ID, creator_id: ID, name: String): [World!]

  findMaps(id: ID, world_id: ID): [Map!]

  findMarkers(world_id: ID, id: ID, map_id: ID, category: String): [Marker!]
}`;
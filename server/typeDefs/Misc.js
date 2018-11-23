module.exports = Misc = 
`type User {
  id: ID!
  username: String!
  email: String!
  worlds: [World!]
}

type World {
  id: ID!
  name: String!
  description: String
  creator_id: ID!
  world_map: WorldMap
  markers: [Marker!]
}

type WorldMap {
  id: ID!
  world_id: ID!
  url: String!
  width: Int!
  height: Int!
  markers: [Marker!]
}

type MarkerMap {
  id: ID!
  marker_id: ID!
  url: String!
  width: Int!
  height: Int!
}

type Marker {
  id: ID!
  category: String!
  world_id: ID!
  map_id: ID
  latitude: Float
  longitude: Float
  name: String!
  population: Int
  government: String
  description: String
  marker_map: MarkerMap
}`;
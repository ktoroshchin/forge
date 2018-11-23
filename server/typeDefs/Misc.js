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
  maps: [Map!]
  markers: [Marker!]
}

type Map {
  id: ID!
  world_id: ID!
  url: String!
  width: Int!
  height: Int!
  world_map: Boolean!
  markers: [Marker!]
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
}`;
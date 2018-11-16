const typeDefs = `
  type Query {
    allUsers: [User!]!
    findUserById(id: ID!): User!
    allWorlds: [World!]!
    findWorldById(id: ID!): World!
    findWorldByName(name: String!): World!
    login(username: String!, password: String!): User
  }

  type Mutation {
    createNewWorld(name: String!, creator_id: ID!): World!
    createNewUser(username: String!, email: String!, password: String!, first_name: String, last_name: String): User!
    createNewMap(world_id: ID!, url: String!, world_map: Boolean!, width: Int!, height: Int!): Map!
    createNewMarker(map_id: ID!, latitude: Float!, longitude: Float!): Marker!
    createNewCity(marker_id: ID, name: String!, population: Int, government: String, description: String): City!
    createNewTown(marker_id: ID, name: String!, population: Int, government: String, description: String): Town!
    createNewLocation(marker_id: ID, name: String!, description: String): Location!
  }
  
  type User {
    id: ID!
    first_name: String
    last_name: String
    username: String!
    email: String!
  }

  type World {
    id: ID!
    name: String!
    description: String!
    creator_id: ID!
  }

  type Map {
    id: ID!
    world_id: ID!
    url: String!
    width: Int!
    height: Int!
  }

  type Marker {
    id: ID!
    map_id: ID!
    latitude: Float!
    longitude: Float!
  }

  interface MapMarker {
    id: ID!
    marker_id: ID
    name: String!
  }

  type City implements MapMarker {
    id: ID!
    marker_id: ID
    name: String!
    population: Int
    government: String
    description: String
  }

  type Town implements MapMarker {
    id: ID!
    marker_id: ID
    name: String!
    population: Int
    government: String
    description: String
  }

  type Location implements MapMarker {
    id: ID!
    marker_id: ID
    name: String!
    description: String
  }
`;

module.exports = typeDefs
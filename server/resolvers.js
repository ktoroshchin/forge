const Models = require('./models');
const uuid = require('uuid/v4')

const userAttributes = ['id', 'first_name', 'last_name', 'email', 'username'];
const worldAttributes = ['id', 'name', 'description', 'creator_id'];

module.exports = {
  Query: {
    allUsers: () => Models.user.findAll({
      attributes: userAttributes,
    }),
    allWorlds: () => Models.world.findAll({
      attributes: worldAttributes,
    }),
    findUserById: (root, { id }) => Models.user.findOne({
      where: { id: id },
      attributes: userAttributes,
    }),
    findWorldById: (root, { id }) => Models.world.findOne({
      where: { id: id },
      attributes: worldAttributes,
    }),
    findWorldByName: (root, { name }) => Models.world.findOne({
      where: { name: name },
      attributes: worldAttributes,
    }),
    login: (root, { username, password }) => Models.user.findOne({
      where: { username, password },
      attributes: userAttributes
    })

  },
  Mutation: {
    createNewWorld: (root, { name, creator_id }) => Models.world.build({
      id: uuid(),
      name: name,
      creator_id: creator_id,
    }).save(),
    createNewUser: (root, { username, email, password, first_name, last_name }) => Models.user.build({
      id: uuid(),
      username: username,
      email: email,
      password: password, //(NEED TO ENCRYPT THE PASSWORD)
      first_name: first_name,
      last_name: last_name
    }).save(),
    createNewMap: (root, { world_id, url, world_map, width, height }) => Models.map.build({
      id: uuid(),
      world_id: world_id,
      url: url,
      world_map: world_map,
      width: width,
      height: height
    }).save(),
    createNewMarker: (root, { map_id, latitude, longitude }) => Models.marker.build({
      id: uuid(),
      map_id: map_id,
      latitude: latitude,
      longitude: longitude
    }).save(),
    createNewCity: (root, { marker_id, name, population, government, description }) => Models.city.build({
      id: uuid(),
      marker_id: marker_id,
      name: name,
      population: population,
      government: government,
      description: description,
    }).save(),
    createNewTown: (root, { marker_id, name, population, government, description }) => Models.town.build({
      id: uuid(),
      marker_id: marker_id,
      name: name,
      population: population,
      government: government,
      description: description,
    }).save(),
    createNewLocation: (root, { marker_id, name, description }) => Models.location.build({
      id: uuid(),
      marker_id: marker_id,
      name: name,
      description: description,
    }).save(),
  }
}
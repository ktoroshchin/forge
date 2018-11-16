const Models = require('./models');
const uuid = require('uuid/v4')

const userAttributes = ['id', 'first_name', 'last_name', 'email', 'username'];
const worldAttributes = ['id', 'name', 'description', 'creator_id'];
const mapAttributes = ['id', 'world_id', 'url', 'width', 'height', 'world_map'];
const markerAttributes = ['id', 'map_id', 'latitude', 'longitude'];
const cityAttributes = ['id', 'marker_id', 'world_id', 'name', 'population', 'government', 'description'];

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
    }),
    findMapById: (root, { id }) => Models.map.findOne({
      where: { id: id },
      attributes: mapAttributes,
    }),
    findMapsByWorldId: (root, { world_id }) => Models.map.findAll({
      where: { world_id: world_id },
      attributes: mapAttributes,
    }),
    findMarkerById: (root, { id }) => Models.map.findOne({
      where: { id: id },
      attributes: markerAttributes,
    }),
    findMarkersByMapId: (root, { map_id }) => Models.map.findAll({
      where: { map_id: map_id },
      attributes: markerAttributes,
    }),
    findCityById: (root, { id }) => Models.city.findOne({
      where: { id: id },
      attributes: cityAttributes,
    }),
    findCitiesByWorldId: (root, { world_id }) => Models.city.findAll({
      where: { world_id: world_id },
      attributes: cityAttributes,
    }),
    findCitiesByMarkerId: (root, { marker_id }) => Models.city.findAll({
      where: { marker_id: marker_id },
      attributes: cityAttributes,
    })

  },
  Mutation: {
    createNewWorld: (root, { name, creator_id, description }) => Models.world.build({
      id: uuid(),
      name: name,
      creator_id: creator_id,
      description: description
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
    createNewCity: (root, { marker_id, world_id, name, population, government, description }) => Models.city.build({
      id: uuid(),
      marker_id: marker_id,
      world_id: world_id,
      name: name,
      population: population,
      government: government,
      description: description,
    }).save(),
    createNewTown: (root, { marker_id, world_id, name, population, government, description }) => Models.town.build({
      id: uuid(),
      marker_id: marker_id,
      world_id: world_id,
      name: name,
      population: population,
      government: government,
      description: description,
    }).save(),
    createNewLocation: (root, { marker_id, world_id, name, description }) => Models.location.build({
      id: uuid(),
      marker_id: marker_id,
      world_id: world_id,
      name: name,
      description: description,
    }).save(),
  }
}
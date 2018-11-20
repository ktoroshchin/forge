const db = require('./models');
const { resolver } = require('graphql-sequelize');

module.exports = {
  Query: {
    findUsers: resolver(db.user),
    findWorlds: resolver(db.world),
    findMaps: resolver(db.map),
    findCities: resolver(db.city),
    findTowns: resolver(db.town),
    findLocations: resolver(db.location)
  },
  Mutation: {
    createNewCity: (root, { world_id, name, population, government, description, map_id, latitude, longitude }) => city.build({
      id: uuid(),
      map_id,
      latitude,
      longitude,
      world_id,
      name,
      population,
      government,
      description,
    }).save(),
    bulkEditCity: (root, { id, name, population, government, description }) => city.update({
      name,
      population,
      government,
      description
    }, { where: { id } })
      .then(() => city.findOne({
        where: { id },
        attributes: cityAttributes,
      })),
    placeCityOnMap: (root, { id, map_id, longitude, latitude }) => city.update({
      map_id,
      longitude,
      latitude
    }, { where: { id } })
      .then(() => city.findOne({
        where: { id },
        attributes: cityAttributes,
      })),
    createNewLocation: (root, { world_id, name, description, map_id, latitude, longitude }) => location.build({
      id: uuid(),
      map_id,
      world_id,
      name,
      description,
      longitude,
      latitude
    }).save(),
    bulkEditLocation: (root, { id, name, description }) => location.update({
      name,
      description
    }, { where: { id } })
      .then(() => location.findOne({
        where: { id },
        attributes: locationAttributes,
      })),
    placeLocationOnMap: (root, { id, map_id, longitude, latitude }) => location.update({
      map_id,
      longitude,
      latitude
    }, { where: { id } })
      .then(() => location.findOne({
        where: { id },
        attributes: locationAttributes,
      })),
    createNewMap: (root, { world_id, url, world_map, width, height }) => map.build({
      id: uuid(),
      world_id,
      url,
      world_map,
      width,
      height
    }).save(),
    bulkEditMap: (root, { id, world_id, url, world_map, width, height }) => map.update({
      id,
      world_id,
      url,
      world_map,
      width,
      height
    }, { where: { id } })
      .then(() => map.findOne({
        where: { id },
        attributes: mapAttributes,
      })),
    removeMarkerById: async (root, { id }) => {
      let remove = await city.findOne({ where: { id } });
      if (!remove) {
        remove = await town.findOne({ where: { id } });
        if (!remove) {
          remove = await location.findOne({ where: { id } });
        }
      }
      remove.update({
        map_id: null,
        longitude: null,
        latitude: null
      });
    },
    removeAllMarkersOnMap: (root, { map_id }) => {
      city.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } });
      town.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } });
      location.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } });
    },
    createNewTown: (root, { world_id, name, population, government, description, map_id, latitude, longitude }) => town.build({
      id: uuid(),
      map_id,
      latitude,
      longitude,
      world_id,
      name,
      population,
      government,
      description,
    }).save(),
    bulkEditTown: (root, { id, name, population, government, description }) => town.update({
      name,
      population,
      government,
      description
    }, { where: { id } })
      .then(() => town.findOne({
        where: { id },
        attributes: townAttributes,
      })),
    placeTownOnMap: (root, { id, map_id, longitude, latitude }) => town.update({
      map_id,
      longitude,
      latitude
    }, { where: { id } })
      .then(() => town.findOne({
        where: { id },
        attributes: townAttributes,
      })),
    createNewUser: (root, { username, email, password, first_name, last_name }) => user.build({
      id: uuid(),
      username,
      email,
      password: bcrypt.hashSync(password),
      first_name,
      last_name
    }).save(),
    bulkEditUser: async (root, { id, password, first_name, last_name }) => {
      const foundUser = await user.findOne({ where: { id } });

      if (await bcrypt.compareSync(password, foundUser.dataValues.password)) {
        user.update({
          first_name,
          last_name
        }, { where: { id } })
      } else {
        throw new Error('UserEdit error: Wrong password')
      }
      return user.findOne({ where: { id } });
    },
    login: async (root, { username, password }) => {
      const foundUser = await user.findOne({ where: { username } });

      if (await bcrypt.compareSync(password, foundUser.dataValues.password))
        return { user_id: foundUser.dataValues.id };
      else
        throw new Error('Wrong login credentials');
    },
    createNewWorld: (root, { name, creator_id, description }) => world.build({
      id: uuid(),
      name,
      creator_id,
      description
    }).save(),
    bulkEditWorld: (root, { id, name, creator_id, description }) => world.update({
      id,
      name,
      creator_id,
      description
    }, { where: { id } })
      .then(() => world.findOne({
        where: { id },
        attributes: worldAttributes,
      }))
  },
  User: {
    worlds: resolver(db.user.worlds)
  },
  World: {

  },
  Map: {

  },
  City: {

  },
  Town: {

  },
  Location: {

  }
}
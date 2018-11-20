const db = require('./models');
const { resolver } = require('graphql-sequelize');
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt-nodejs');

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
    createNewCity: async (root, { world_id, name, population, government, description, map_id, latitude, longitude }) => {
      const city = await db.city.build({
        id: uuid(),
        map_id,
        latitude,
        longitude,
        world_id,
        name,
        population,
        government,
        description
      })
      return city.save()
    },
    bulkEditCity: async (root, input) => {
      const city = await db.city.findByPk(input.id)
      city.set(input)
      return city.save()
    },
    placeCityOnMap: async (root, input) => {
      const city = await db.city.findByPk(input.id)
      city.set(input)
      return city.save()
    },
    createNewLocation: async (root, { world_id, name, description, map_id, latitude, longitude }) => {
      const location = await db.location.build({
        id: uuid(),
        map_id,
        world_id,
        name,
        description,
        longitude,
        latitude
      })
      return location.save()
    },
    bulkEditLocation: async (root, input) => {
      const location = await db.location.findByPk(input.id)
      location.set(input)
      return location.save()
    },
    placeLocationOnMap: async (root, input) => {
      const location = await db.location.findByPk(input.id)
      location.set(input)
      return location.save()
    },
    createNewMap: async (root, { world_id, url, world_map, width, height }) => {
      const map = await db.map.build({
        id: uuid(),
        world_id,
        url,
        world_map,
        width,
        height
      })
      return map.save()
    },
    bulkEditMap: async (root, input) => {
      const map = await db.map.findByPk(input.id)
      map.set(input)
      return map.save()
    },
    removeMarkerById: async (root, { id }) => {
      let remove = await db.city.findByPk(id);
      if (!remove) {
        remove = await db.town.findByPk(id);
        if (!remove) {
          remove = await db.location.findByPk(id);
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
    createNewTown: async (root, { world_id, name, population, government, description, map_id, latitude, longitude }) => {
      const town = await db.town.build({
        id: uuid(),
        map_id,
        latitude,
        longitude,
        world_id,
        name,
        population,
        government,
        description,
      })
      return town.save()
    },
    bulkEditTown: async (root, input) => {
      const town = await db.town.findByPk(input.id)
      town.set(input)
      return town.save()
    },
    placeTownOnMap: async (root, input) => {
      const town = await db.town.findByPk(input.id)
      town.set(input)
      return town.save()
    },
    createNewUser: async (root, { username, email, password, first_name, last_name }) => {
      const user = await db.user.build({
        id: uuid(),
        username,
        email,
        password: bcrypt.hashSync(password),
        first_name,
        last_name
      })
      return user.save()
    },
    bulkEditUser: async (root, { id, password, first_name, last_name }) => {
      const user = await db.user.findByPk(id);

      if (await !bcrypt.compareSync(password, user.dataValues.password)) {
        throw new Error('UserEdit error: Wrong password');
      }
      user.update({
        first_name,
        last_name
      })
      return user;
    },
    login: async (root, { username, password }) => {
      const user = await db.user.findOne({ where: { username } });

      if (await !bcrypt.compareSync(password, user.dataValues.password)) {
        throw new Error('Wrong login credentials');
      }

      return user;
    },
    createNewWorld: async (root, { name, creator_id, description }) => {
      const world = await db.world.build({
        id: uuid(),
        name,
        creator_id,
        description
      })
      return world.save()
    },
    bulkEditWorld: async (root, input) => {
      const world = await db.world.findByPk(input.id)
      world.set(input)
      return world.save()
    }
  },
  User: {
    worlds: resolver(db.user.worlds)
  },
  World: {
    maps: resolver(db.world.maps)
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
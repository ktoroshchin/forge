const db = require('./models');
const { resolver } = require('graphql-sequelize');
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt-nodejs');
const { Op } = require('sequelize');

module.exports = {
  Query: {
    findUsers: resolver(db.user),
    findWorlds: resolver(db.world),
    searchWorlds: (root, { name }) => db.world.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } }),
    findMaps: resolver(db.map),
    findMarkers: resolver(db.marker)
  },
  Mutation: {
    createNewMap: async (root, { world_id, url, world_map, width, height }) => {
      if (await db.map.findOne({ where: { world_map: true } }) && world_map) {
        throw new Error('Cannot set two maps as the main world map')
      }
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
    editMapInfo: async (root, input) => {
      const map = await db.map.findByPk(input.id)
      map.set(input)
      return map.save()
    },
    createNewMarker: async (root, { category, world_id, name, population, government, description }) => {
      const marker = await db.marker.build({
        id: uuid(),
        category,
        world_id,
        name,
        population,
        government,
        description
      })
      return marker.save()
    },
    editMarkerInfo: async (root, input) => {
      const marker = await db.marker.findByPk(input.id)
      marker.set(input)
      return marker.save()
    },
    placeMarkerOnMap: async (root, input) => {
      const marker = await db.marker.findByPk(input.id)
      marker.set(input)
      return marker.save()
    },
    destroyMarker: async (root, { id }) => {
      let marker = await db.marker.findByPk(id)
      if (!marker.destroy()) throw new Error('Marker was not deleted')
      return true
    },
    removeMarkerById: async (root, { id }) => {
      let marker = await db.marker.findByPk(id);
      if (await !marker.update({
        map_id: null,
        longitude: null,
        latitude: null
      })) throw new Error('Marker was not removed')

      return true
    },
    removeAllMarkersOnMap: async (root, { map_id }) => {
      if (await !db.marker.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } })) throw new Error('The markers were not removed')

      return true
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
    editWorldInfo: async (root, input) => {
      const world = await db.world.findByPk(input.id)
      world.set(input)
      return world.save()
    },
    register: async (root, { username, email, password, first_name, last_name }) => {
      if (await db.user.findOne({ where: { username } }))
        throw new Error('Username already Exists');
      else if (await db.user.findOne({ where: { email } }))
        throw new Error('Email is already in use');

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
    editUserInfo: async (root, { id, password, first_name, last_name }) => {
      const user = await db.user.findByPk(id);

      if (await !bcrypt.compareSync(password, user.dataValues.password)) {
        throw new Error('Wrong password');
      }
      user.update({
        first_name,
        last_name
      })
      return user;
    },
    login: async (root, { username, password }) => {
      const user = await db.user.findOne({ where: { username } });

      if (!user) {
        throw new Error('No users with that username');
      }
      if (await !bcrypt.compareSync(password, user.dataValues.password)) {
        throw new Error('Wrong password');
      }

      return user;
    },
    removeWorldById: async (root, { id }) => {
      let world = await db.world.findByPk(id);
      await db.marker.destroy({ where: { world_id: id } });
      await db.map.destroy({ where: { world_id: id } });
      if (!world.destroy()) throw new Error('World not deleted')
      return true
    },
    removeMapById: async (root, { id }) => {
      let map = await db.map.findByPk(id);
      await db.marker.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id: id } })
      if (!map.destroy()) throw new Error('Map not deleted')
      return true
    },
  },
  User: {
    worlds: resolver(db.user.worlds)
  },
  World: {
    maps: resolver(db.world.maps),
    markers: resolver(db.world.markers)
  },
  Map: {
    markers: resolver(db.map.markers)
  }
}
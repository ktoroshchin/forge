const db = require('./models');
const { resolver } = require('graphql-sequelize');
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  Query: {
    findUsers: resolver(db.user),
    findWorlds: resolver(db.world),
    findMaps: resolver(db.map),
    findMarkers: resolver(db.marker)
  },
  Mutation: {
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
    removeMarkerById: async (root, { id }) => {
      let marker = await db.marker.findByPk(id);
      marker.update({
        map_id: null,
        longitude: null,
        latitude: null
      });
      return marker.save()
    },
    removeAllMarkersOnMap: async (root, { map_id }) => {
      let map = await db.map.findByPk(map_id)
      await db.marker.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } })
      return map
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
  },
  User: {
    worlds: resolver(db.user.worlds)
  },
  World: {
    maps: resolver(db.world.maps)
  },
  Map: {

  }
}
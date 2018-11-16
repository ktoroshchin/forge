const { map } = require('../models');
const uuid = require('uuid/v4')

const mapAttributes = ['id', 'world_id', 'url', 'width', 'height', 'world_map'];

module.exports = {
  Queries: {
    findMapById: (root, { id }) => map.findOne({
      where: { id: id },
      attributes: mapAttributes,
    }),
    findMapsByWorldId: (root, { world_id }) => map.findAll({
      where: { world_id: world_id },
      attributes: mapAttributes,
    })
  },
  Mutations: {
    createNewMap: (root, { world_id, url, world_map, width, height }) => map.build({
      id: uuid(),
      world_id: world_id,
      url: url,
      world_map: world_map,
      width: width,
      height: height
    }).save()
  }
}
'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
let queries = '', mutations = '', models = '';
let typeDefs = ``;

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const { queryType, mutationType, modelType } = require(`${__dirname}/${file}`);
    queries += queryType; mutations += mutationType; models += modelType;
  });

typeDefs += `type Query {${queries}} type Mutation {${mutations}} ${models}`;

module.exports = typeDefs;

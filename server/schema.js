const Query = require('./typeDefs/Query');
const Mutation = require('./typeDefs/Mutation');
const Misc = require('./typeDefs/Misc');

module.exports = typeDefs = `${Query}, ${Mutation}, ${Misc}`;
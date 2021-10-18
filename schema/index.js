const { SchemaComposer } = require('graphql-compose');
const db = require('../models/db');

const schemaComposer = new SchemaComposer();

const { UserQuery, UserMutation } = require('./user');
const { RankQuery, RankMutation } = require('./rank');
const { ChampQuery, ChampMutation } = require('./champ');
const { GameQuery, GameMutation } = require('./game');
const { PlayerQuery, PlayerMutation } = require('./player');
const { ProblemQuery, ProblemMutation } = require('./problem');

schemaComposer.Query.addFields({
  ...UserQuery,
  ...RankQuery,
  ...ChampQuery,
  ...GameQuery,
  ...PlayerQuery,
  ...ProblemQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...RankMutation,
  ...ChampMutation,
  ...GameMutation,
  ...PlayerMutation,
  ...ProblemMutation,
});

module.exports = schemaComposer.buildSchema();

require('./db');
const _models = {
  User: require('./schema/user').model,
};

module.exports = _models;

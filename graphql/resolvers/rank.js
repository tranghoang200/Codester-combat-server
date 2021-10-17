//Query
const rank = async (root, { name }) => {
  return `Hello ${name}!`;
};

module.exports = rank;

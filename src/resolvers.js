const resolvers = {
  Query: {
    async getLink(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async getAllLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {}
};

module.exports = resolvers;

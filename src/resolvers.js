const resolvers = {
  Query: {
    async getLink(root, { id }, { models }) {
      return models.Link.findByPk(id);
    },
    async getAllLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let newSlug = "";

      if (slug) {
        newSlug = slug;
      } else {
        for (let i = 0; i < 4; i++) {
          newSlug += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
      }

      return models.Link.create({
        url,
        slug: newSlug
      });
    }
  }
};

module.exports = resolvers;

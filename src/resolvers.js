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
      // TODO: Check for uniquness of slug values

      const randomSlugGen = (num) => {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let randomSlug = "";

        for (let i = 0; i < num; i++) {
          randomSlug += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }

        return randomSlug;
      };

      let newSlug = "";

      if (slug) {
        newSlug = slug;
      } else {
        newSlug = randomSlugGen(4);
      }

      return models.Link.create({
        url,
        slug: `https://samslinks.com/${newSlug}`
      });
    }
  }
};

module.exports = resolvers;

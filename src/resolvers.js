const { slugGen } = require("./utils/slugGen");

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
      // TODO: Validate value of url (ensure a link is passed & and no blanks)
      // TODO: Return Error message if blank? Validate on front end?

      let newSlug = "";

      if (slug) {
        newSlug = slug;
      } else {
        newSlug = slugGen(4);
      }

      return models.Link.create({
        url,
        slug: `https://samslinks.com/${newSlug}`
      });
    }
  }
};

module.exports = resolvers;

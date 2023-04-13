const resolvers = {
  Query: {
    user: async () => {
      const user = {};
      return user;
    },
  },
  Mutation: {
    createUser: async () => {
      const createdUser = {};
      return createdUser;
    },
  },
};

export default resolvers;

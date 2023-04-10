const resolvers = {
  Query: {
    user: async (_: unknown, args: any) => {
      const user = {};
      return user;
    },
  },
  Mutation: {
    createUser: async (_: unknown, args: any) => {
      const createdUser = {};
      return createdUser;
    },
  },
};

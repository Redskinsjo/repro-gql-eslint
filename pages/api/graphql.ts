// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { loadFiles } from "@graphql-tools/load-files";
import { createServer } from "@graphql-yoga/node";

import resolvers from "@/gql/resolvers";

export const config = { api: { bodyParser: false } };

async function server() {
  const server = createServer({
    server: {
      typeDefs: await loadFiles("src/typeDefs/**/*.graphql"),
      resolvers,
    },
  });
  return server;
}

export default server;

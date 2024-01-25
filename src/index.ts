import { makeExecutableSchema } from "@graphql-tools/schema";
import { createYoga } from "@graphql-debugger/graphql-yoga";
import { createServer } from "http";

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});

import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./graphql/resolvers";
import resolvers from "./graphql/myresolvers";

const server = new GraphQLServer({
  // typeDefs: "graphql/schema.graphql",
  typeDefs: "graphql/myschema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));

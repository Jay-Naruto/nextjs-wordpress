import { ApolloClient, InMemoryCache } from "@apollo/client";

const url='http://hot-dang-homes.local/graphql'

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

export default client;

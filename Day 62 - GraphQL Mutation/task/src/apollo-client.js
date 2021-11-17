import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://kampus-merdeka-waldo.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret":
            "LO4MZ9N0dS0zn0EslY7JeI6WmYoVo5COOKYqK2RMhvRVymsBN4KdVzWmPL43aQpp",
    },
});

export default client;

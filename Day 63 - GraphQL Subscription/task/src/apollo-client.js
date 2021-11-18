import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: "https://kampus-merdeka-waldo.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret":
            "LO4MZ9N0dS0zn0EslY7JeI6WmYoVo5COOKYqK2RMhvRVymsBN4KdVzWmPL43aQpp",
    },
});

const wsLink = new WebSocketLink({
    uri: "wss://kampus-merdeka-waldo.hasura.app/v1/graphqll",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret":
                    "LO4MZ9N0dS0zn0EslY7JeI6WmYoVo5COOKYqK2RMhvRVymsBN4KdVzWmPL43aQpp",
            },
        },
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;

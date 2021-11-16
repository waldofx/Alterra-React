import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://loving-pony-66.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret":
            "8c87fgmS28UG0yRaRQcYEme4ezXFAIsTcql8xce6WrHFRIbsmFx5UBqBHbWj77Rw",
    },
});

export default client;

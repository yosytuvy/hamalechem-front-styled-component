import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const BASE_URI = "http://localhost:3000/graphql";

const httpLink = createHttpLink({ uri: BASE_URI });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("HAMALECHEM_TOKEN");
    return {
        headers: { ...headers, Authorization: token ? `${token}` : "" },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;

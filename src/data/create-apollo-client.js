import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import fetch from 'isomorphic-unfetch';

import config from 'config';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) global.fetch = fetch;

function create(initialState = {}) {
    return new ApolloClient({
        link: new BatchHttpLink(config('/apollo/http')),
        cache: new InMemoryCache().restore(initialState),

        // Disables forceFetch on the server
        // (so queries are only run once)
        ssrMode: !process.browser,
        connectToDevTools: process.browser,
    });
}

export default function createApolloClient(initialState) {
    // Make sure to create a new client for every server-side
    // request so that data isn't shared between connections
    // (which would be bad)
    if (!process.browser) return create(initialState);

    // Reuse client on the client-side
    if (!apolloClient) apolloClient = create(initialState);
    return apolloClient;
}

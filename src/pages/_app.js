import App from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import withApolloClient from 'data/with-apollo-client';

class MyApp extends App {
    render() {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
}

export default withApolloClient(MyApp);

import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';

import createApolloClient from './create-apollo-client';

export default App =>
    class Apollo extends React.Component {
        static displayName = 'withApollo(App)';

        static async getInitialProps(ctx) {
            const { Component, router } = ctx;
            const appProps = App.getInitialProps ? await App.getInitialProps(ctx) : {};

            const client = createApolloClient();

            if (!process.browser) {
                try {
                    await getDataFromTree(
                        <App
                            {...appProps}
                            Component={Component}
                            router={router}
                            apolloClient={client}
                        />
                    );
                } catch (error) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                    console.error('Error while running `getDataFromTree`', error);
                }

                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind();
            }

            return {
                ...appProps,
                apolloState: client.cache.extract(),
            };
        }

        constructor(props) {
            super(props);

            // eslint-disable-next-line react/prop-types
            this.apolloClient = createApolloClient(props.apolloState);
        }

        render() {
            return <App {...this.props} apolloClient={this.apolloClient} />;
        }
    };

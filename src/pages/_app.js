import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apolloClient';
import 'styles/style.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;

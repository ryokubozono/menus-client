import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {parseCookies} from 'nookies'

function MyApp({ Component, pageProps }: AppProps) {

  const client = apolloClientInit()

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

let uri = ''
if (process.env.NODE_ENV === "production") {
  uri = "https://us-central1-menus-client.cloudfunctions.net/graphql"
} else {
  uri = "/menus-client/us-central1/graphql"
}

function apolloClientInit() {
  const httpLink = new HttpLink({
    uri: uri,
  })
  const authLink = setContext((_, { headers }) => {
    const cookies = parseCookies()
    return {
      headers: {
        ...headers,
        authorization: cookies.session ? `Bearer ${cookies.session}` : "",
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    queryDeduplication: false,
  });
  return client
}
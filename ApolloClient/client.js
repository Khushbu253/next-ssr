// import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
// // import { RestLink } from "apollo-link-rest";

// const httpLink = new HttpLink({
//   uri: `${'http://192.168.0.31:1330'}/graphql`
// });

// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: ApolloLink.from([httpLink]),
// });

import { ApolloClient} from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from 'isomorphic-fetch'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${'https://api.cybercomcreation.com'}/graphql`,
});
const client = new ApolloClient({
  cache,
  link,
  fetch,
});

export default client;



// import fetch from 'isomorphic-fetch';
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// export const client = new ApolloClient({
//   uri: `http://192.168.0.31:1330/`, //THIS IS THE URL OF THR GRAPHQL WE WANTO TO QUERY
//   fetch: fetch,

//   cache: new InMemoryCache(),
// });


// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: `${'http://192.168.0.31:1330'}/graphql`
// });
// const client = new ApolloClient({
//   cache,
//   link
// });

// export default client;
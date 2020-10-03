import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from "@apollo/client"

// const uri = "https://metaphysics-production.artsy.net/"

// const httpLink = createHttpLink({
//   uri
// })

// const authLink = setContext((_, { headers }) => {
//   return {
//       headers: {
//           ...headers,
//           "x-access-token": 
//           "x-user-id": 
//       }
//     }
//   })
//   console.log(authLink)

  // const client = new ApolloClient({
  //     link: new HttpLink({
  //   uri: "https://metaphysics-production.artsy.net/"
  // }),
  // cache: new InMemoryCache(),
  //   request: (operation) => {
  //     operation.setContext({
  //       headers: {
  //         "x-access-token": 
  //         "x-user-id":
  //       }
  //     })
  //   }
  // })

  

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://metaphysics-staging.artsy.net/"
  }),
  cache: new InMemoryCache()
})

//  const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// })



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);


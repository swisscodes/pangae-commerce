import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/css-utilities/general.css'
import EntryPoint from './entry-point/EntryPoint';
import reportWebVitals from './reportWebVitals';
import { onError } from "@apollo/client/link/error";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'


const errorLink = onError(({graphQLErrors, networkError}) => {
  if(graphQLErrors) {
    graphQLErrors.map(({message, locations, path}):void => {
      console.log(`Graphql error ${message}`)
      return undefined
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri:'https://pangaea-interviews.vercel.app/api/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <EntryPoint />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

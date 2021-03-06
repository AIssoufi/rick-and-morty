// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

// Appolo client
import client from './client';

// Components
import App from './App';

// i18n
import './i18n';

// Styles
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

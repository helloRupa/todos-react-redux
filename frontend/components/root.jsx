import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

// root takes props as argument and uses destructuring to get just store
// it returns a provider component which wraps all child components giving access to store
const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
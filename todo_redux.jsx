import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './frontend/store/store';
import Root from './frontend/components/root';

const store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={ store } />, document.getElementById('content'));
});
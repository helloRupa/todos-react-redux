import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import Root from './frontend/components/root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={ configureStore() } />, document.getElementById('content'));
});
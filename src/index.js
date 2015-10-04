import './styles.styl';
import 'babel-core/polyfill';
import React from 'react';
import App from './App';
import Help from './Help';
import * as reducers from './reducers';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

let root = document.getElementById('app');

const finalCreateStore = compose(
  devTools(),
  persistState(window.location
    .href.match(
    /[?&]debug_session=([^&]+)\b/)
    ),
  createStore
);

let store = finalCreateStore(combineReducers(reducers));

React.render(
  <div>
    <Provider store={store}>
      { () => <App /> }
    </Provider>
    <Help />
    <DebugPanel top right bottom>
      <DevTools store={store}
      monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  root);

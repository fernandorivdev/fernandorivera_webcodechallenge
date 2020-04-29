import React from 'react';
import './App.css';
//import redux provider
import { Provider } from 'react-redux'
//import custom reducers
import reducers from './reducers';
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
//import sagas that is a library that aims to make application side effects
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';
/*React DnD is a set of React utilities to help you build complex drag and drop 
interfaces while keeping your components decoupled*/
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
//import my custom api
import api from './api';

//import my components
import TopBar from './components/top-bar';
import PostList from "./components/post-list/post-list";
import PostActions from './components/post-action'
//importr actions for Seach Command
import { onSearchCommand } from './components/top-bar/actions';

const reducer = combineReducers(reducers);

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(reducer, enhancer);
  const services = { api, };
  sagas.forEach( saga => sagaMiddleware.run(saga, services));

 
  store.dispatch(onSearchCommand('funny'));

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <TopBar/>
        <PostList/>
        <PostActions/>
      </DndProvider>
    </Provider>
  );
}

export default App;

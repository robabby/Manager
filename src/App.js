import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDFkn-R7Gd3T_fPESb7RngdmoE0uRW_cf0",
      authDomain: "manager-1a641.firebaseapp.com",
      databaseURL: "https://manager-1a641.firebaseio.com",
      projectId: "manager-1a641",
      storageBucket: "manager-1a641.appspot.com",
      messagingSenderId: "629186823453"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

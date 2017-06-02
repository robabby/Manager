import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

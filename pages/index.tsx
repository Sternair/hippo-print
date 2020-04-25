import React from 'react';
import './style.scss';
import App from './App';

// import * as serviceWorker from './serviceWorker';
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

export default class extends React.Component {

  render () {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

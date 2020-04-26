import React from 'react'
import Amplify from 'aws-amplify'
import Head from 'next/head'
import '../styles/style.scss'
import App from '../components/App'
import awsExports from '../lib/aws-exports'

Amplify.configure(awsExports)

export default class extends React.Component {

  render() {
    return (
      <React.StrictMode>
        <Head>
          <script src="https://kit.fontawesome.com/7c7c7d7814.js" crossOrigin="anonymous"></script>
        </Head>
        <App/>
      </React.StrictMode>
    )
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

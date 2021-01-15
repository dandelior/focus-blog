import React from 'react';
import '../styles/globals.css';

import Router from 'next/router';
import App, { Container } from 'next/app';
import Loader from '../components/loader';

export default class MyApp extends App {

  constructor() {
    super()

    this.state = {onLoading: false}

    Router.onRouteChangeStart = () => {
      // Some page has started loading
      this.setState({onLoading: true});
    };

    Router.onRouteChangeComplete = () => {
      // Some page has finished loading
      this.setState({onLoading: false});
    }

    Router.onRouteChangeError = (err) => {
      // un error ocurriò
      console.log(err);
    }

  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Loader show={this.state.onLoading} />
        <Component {...pageProps} />
      </>
    )
  }

}

// function MyApp({ Component, pageProps, router }) {
//   return (
//     <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
//       pageInitial: {
//         opacity: 0
//       },
//       pageAnimate: {
//         opacity: 1
//       }
//     }}>
//       <Component {...pageProps} />
//     </motion.div>
//   )
// }

// export default MyApp
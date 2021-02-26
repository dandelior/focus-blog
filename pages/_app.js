import React, {useEffect, useState} from 'react';
// import '../styles/globals.css';

import Router from 'next/router';
import App, { Container } from 'next/app';
import Loader from '../components/loader';

export default function MyApp({ Component, pageProps }) {

  const [onLoading, setOnLoading] = useState(false);

  useEffect(() => {
    Router.onRouteChangeStart = () => {
      // Some page has started loading
      setOnLoading(true);
    }

    Router.onRouteChangeComplete = () => {
      // Some page has finished loading
      setOnLoading(false);
    }

    Router.onRouteChangeError = (err) => {
      // un error ocurriò
      console.log(err);
    }
  });

  return(
    <>
      <Loader show={onLoading} />
      <Component {...pageProps} />
    </>
  )
}
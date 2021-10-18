import React from 'react';
import App from "next/app";
import Head from "next/head";

import 'styles/globals.css';
import 'styles/tailwindNew.css';
import 'react-toastify/dist/ReactToastify.css';

export default class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Dino Web App</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
